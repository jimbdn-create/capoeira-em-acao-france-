// Header et footer partagés, injectés dans #site-header / #site-footer
function renderHeader(active) {
  const items = [
    ["lieux.html", "Rejoindre un cours"],
    ["index.html", "Accueil"],
    ["capoeira.html", "La Capoeira"],
    ["lieux.html", "Nos lieux"],
    ["evenements.html", "Événements"],
    ["galerie.html", "Galerie"],
    ["videos.html", "Vidéos"],
    ["chansons.html", "Chansons"],
    ["cours-en-ligne.html", "Cours en ligne"],
  ];
  const links = items.map(([href, label]) =>
    `<a href="${href}" class="${active === href ? 'active' : ''}">${label}</a>`
  ).join("") + `<a href="#" id="nav-teampulse" style="display:none;" target="_blank" rel="noopener">Espace membres</a>`;

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a href="index.html" class="brand">
          <img src="assets/img/logo-horizontal.png" alt="Capoeira em Ação France - Mestre Cascavel">
        </a>
        <nav class="main-nav" id="main-nav">${links}</nav>
        <a href="lieux.html" class="btn btn-red header-cta" style="padding:10px 22px;font-size:.9rem;margin-left:14px;">Rejoindre un cours</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Menu">&#9776;</button>
      </div>
    </header>
  `;

  // Affiche le lien "Espace membres" seulement si un lien TeamPulse a été renseigné dans le dashboard
  if (typeof supabaseClient !== "undefined") {
    supabaseClient.from("site_content").select("value").eq("key", "teampulse_url").maybeSingle().then(({ data }) => {
      if (data?.value) {
        const el = document.getElementById("nav-teampulse");
        if (el) { el.href = data.value; el.style.display = ""; }
      }
    });
  }

  document.getElementById("nav-toggle").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("open");
  });
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="cols">
          <div>
            <h4>Capoeira em Ação France</h4>
            <p style="max-width:340px;color:#b8b3af;font-size:.93rem;">
              École de Capoeira affiliée à l'académie internationale du Mestre Cascavel.
              Cours, stages et événements en Île-de-France et à Aix-en-Provence.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <a href="capoeira.html">La Capoeira</a>
            <a href="lieux.html">Nos lieux</a>
            <a href="evenements.html">Événements</a>
            <a href="galerie.html">Galerie</a>
          </div>
          <div>
            <h4>École</h4>
            <a href="videos.html">Vidéos</a>
            <a href="cours-en-ligne.html">Cours en ligne</a>
            <a href="chansons.html">Chansons</a>
          </div>
          <div>
            <h4>Contact</h4>
            <div id="footer-contact" style="color:#b8b3af;font-size:.93rem;padding:4px 0;">Chargement…</div>
            <div id="footer-cotisation"></div>
            <a href="admin/login.html">Espace admin</a>
          </div>
        </div>
        <div class="bottom">
          <span>© ${new Date().getFullYear()} Capoeira em Ação France — Mestre Cascavel</span>
        </div>
      </div>
    </footer>
  `;

  // Charge l'email/téléphone de contact général depuis le contenu du site (modifiable dans le dashboard admin)
  if (typeof supabaseClient !== "undefined") {
    supabaseClient.from("site_content").select("key, value").in("key", ["contact_general_email", "contact_general_phone", "cotisation_url"]).then(({ data }) => {
      const el = document.getElementById("footer-contact");
      if (!el || !data) return;
      const email = data.find(r => r.key === "contact_general_email")?.value;
      const phone = data.find(r => r.key === "contact_general_phone")?.value;
      const cotisationUrl = data.find(r => r.key === "cotisation_url")?.value;
      let html = "";
      if (email) html += `<a href="mailto:${email}">${email}</a>`;
      if (phone) html += `<a href="tel:${phone}">${phone}</a>`;
      el.outerHTML = html || `<span style="color:#b8b3af;font-size:.93rem;">Contact à venir</span>`;

      const cotisationEl = document.getElementById("footer-cotisation");
      if (cotisationEl && cotisationUrl) {
        cotisationEl.innerHTML = `<a href="${cotisationUrl}" target="_blank" rel="noopener" style="color:var(--red);font-weight:600;">Payer ma cotisation ↗</a>`;
      }
    });
  }
}
