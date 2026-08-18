// Header et footer partagés, injectés dans #site-header / #site-footer
function renderHeader(active) {
  const items = [
    ["index.html", "Accueil"],
    ["capoeira.html", "La Capoeira"],
    ["lieux.html", "Nos lieux"],
    ["evenements.html", "Événements"],
    ["galerie.html", "Galerie"],
    ["videos.html", "Vidéos"],
    ["cours-en-ligne.html", "Cours en ligne"],
  ];
  const links = items.map(([href, label]) =>
    `<a href="${href}" class="${active === href ? 'active' : ''}">${label}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a href="index.html" class="brand">
          <img src="assets/img/logo-badge.png" alt="Capoeira em Ação France">
          <span>Capoeira em <em>Ação</em> France</span>
        </a>
        <nav class="main-nav" id="main-nav">${links}</nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="Menu">&#9776;</button>
      </div>
    </header>
  `;
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
            <a href="admin/login.html">Espace admin</a>
          </div>
        </div>
        <div class="bottom">
          <span>© ${new Date().getFullYear()} Capoeira em Ação France — Mestre Cascavel</span>
        </div>
      </div>
    </footer>
  `;
}
