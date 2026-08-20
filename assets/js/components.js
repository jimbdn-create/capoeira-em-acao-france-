// Header et footer partagés, injectés dans #site-header / #site-footer
function renderHeader(active) {
  const items = [
    ["index.html", "nav_home"],
    ["capoeira.html", "nav_capoeira"],
    ["professeurs.html", "nav_teachers"],
    ["lieux.html", "nav_locations"],
    ["evenements.html", "nav_events"],
    ["medias.html", "nav_media"],
    ["cours-en-ligne.html", "nav_courses"],
  ];
  const links = items.map(([href, key]) =>
    `<a href="${href}" data-i18n="${key}" class="${active === href ? 'active' : ''}"></a>`
  ).join("") + `<a href="#" id="nav-teampulse" style="display:none;" target="_blank" rel="noopener">Espace membres</a>`;

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a href="index.html" class="brand">
          <img src="assets/img/logo-horizontal.png" alt="Capoeira em Ação France - Mestre Cascavel">
        </a>
        <nav class="main-nav" id="main-nav">${links}</nav>
        <div id="lang-switcher" class="lang-switcher"></div>
        <a href="lieux.html" class="btn btn-red header-cta" style="padding:10px 22px;font-size:.9rem;margin-left:14px;" data-i18n="nav_join">Rejoindre un cours</a>
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
  renderLangSwitcher();
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="cols">
          <div>
            <h4>Capoeira em Ação France</h4>
            <p data-i18n="footer_desc" style="max-width:340px;color:#b8b3af;font-size:.93rem;">
              École de Capoeira affiliée à l'académie internationale du Mestre Cascavel.
              Cours, stages et événements en Île-de-France et à Aix-en-Provence.
            </p>
            <div id="footer-social" style="display:flex;gap:12px;margin-top:16px;"></div>
          </div>
          <div>
            <h4 data-i18n="footer_nav">Navigation</h4>
            <a href="capoeira.html" data-i18n="nav_capoeira">La Capoeira</a>
            <a href="professeurs.html" data-i18n="nav_teachers">Professeurs</a>
            <a href="lieux.html" data-i18n="nav_locations">Nos lieux</a>
            <a href="evenements.html" data-i18n="nav_events">Événements</a>
          </div>
          <div>
            <h4 data-i18n="footer_school">École</h4>
            <a href="medias.html#photos">Galerie photos</a>
            <a href="medias.html#videos">Vidéos</a>
            <a href="medias.html#songs">Chansons</a>
            <a href="cours-en-ligne.html" data-i18n="nav_courses">Cours en ligne</a>
          </div>
          <div>
            <h4 data-i18n="footer_contact">Contact</h4>
            <div id="footer-contact" data-i18n="footer_contact_loading" style="color:#b8b3af;font-size:.93rem;padding:4px 0;">Chargement…</div>
            <div id="footer-cotisation"></div>
            <a href="admin/login.html" data-i18n="footer_admin">Espace admin</a>
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
    supabaseClient.from("site_content").select("key, value").in("key", [
      "contact_general_email", "contact_general_phone", "cotisation_url",
      "social_instagram_url", "social_facebook_url", "social_tiktok_url"
    ]).then(({ data }) => {
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

      const instaUrl = data.find(r => r.key === "social_instagram_url")?.value;
      const fbUrl = data.find(r => r.key === "social_facebook_url")?.value;
      const tiktokUrl = data.find(r => r.key === "social_tiktok_url")?.value;
      const socialEl = document.getElementById("footer-social");
      if (socialEl) {
        const iconStyle = "width:34px;height:34px;border-radius:50%;background:#221f1e;display:flex;align-items:center;justify-content:center;color:#fff;transition:background .15s;";
        let socialHtml = "";
        if (instaUrl) socialHtml += `<a href="${instaUrl}" target="_blank" rel="noopener" aria-label="Instagram" style="${iconStyle}"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>`;
        if (fbUrl) socialHtml += `<a href="${fbUrl}" target="_blank" rel="noopener" aria-label="Facebook" style="${iconStyle}"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>`;
        if (tiktokUrl) socialHtml += `<a href="${tiktokUrl}" target="_blank" rel="noopener" aria-label="TikTok" style="${iconStyle}"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.3 4.3 0 0 1-3.1-3.6V2h-3.4v13.7a2.6 2.6 0 1 1-1.8-2.5V9.7a5.9 5.9 0 1 0 5.2 5.9V9.5a7.6 7.6 0 0 0 4.4 1.4V7.5a4.3 4.3 0 0 1-1.3-1.7z"/></svg></a>`;
        socialEl.innerHTML = socialHtml;
      }

      if (typeof applyTranslations === "function") applyTranslations();
    });
  }
}
