const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');

function runFallbackDataTests() {
  const fallbackPath = path.join(root, 'assets/js/public-fallback-data.js');
  assert.ok(fs.existsSync(fallbackPath), 'Le jeu de données public de secours doit exister');
  const fallback = require(fallbackPath);
  assert.equal(fallback.locations.length, 5, 'Les cinq sites annoncés doivent être disponibles hors ligne');
  for (const location of fallback.locations) {
    assert.ok(location.name, 'Chaque lieu doit avoir un nom');
    assert.ok(location.address, `${location.name} doit avoir une adresse`);
    assert.ok(Array.isArray(location.course_slots), `${location.name} doit exposer ses créneaux`);
    assert.ok(location.contact_instagram || location.contact_whatsapp || location.contact_email || location.contact_phone,
      `${location.name} doit proposer au moins un contact`);
  }
}

function runPageIntegrationTests() {
  const publicPages = [
    'index.html', 'capoeira.html', 'professeurs.html', 'lieux.html',
    'evenements.html', 'medias.html', 'cours-en-ligne.html',
  ];
  for (const page of publicPages) {
    const html = read(page);
    assert.match(html, /public-fallback-data\.js/, `${page} doit charger les données de secours`);
  }
  const index = read('index.html');
  assert.match(index, /Cours d'essai gratuit/i, "L'accueil doit annoncer clairement le cours d'essai gratuit");
  assert.match(index, /Écrire sur Instagram/i, "L'accueil doit proposer un contact Instagram direct");

  const locations = read('lieux.html');
  assert.match(locations, /contact_instagram/, 'Chaque lieu doit pouvoir proposer un contact Instagram');
  assert.match(locations, /Cours d'essai gratuit/i, 'La page des lieux doit mettre en avant le cours d’essai');
  assert.match(locations, /registration_url/, 'Les antennes concernées doivent pouvoir afficher un lien d’inscription');

  const fallback = require(path.join(root, 'assets/js/public-fallback-data.js'));
  const longjumeau = fallback.locations.find((location) => location.name === 'Longjumeau');
  assert.ok(longjumeau, 'Longjumeau doit exister dans les données de secours');
  assert.ok(longjumeau.course_slots.some((slot) => slot.schedule === 'Samedi 18h30–20h45' && /Acrobaties/.test(slot.notes)),
    'Le créneau officiel Acrobaties adultes doit être présent');
  assert.match(longjumeau.registration_url || '', /helloasso\.com\/associations\/capoeira-street-et-disciplines-associees/,
    'Le lien officiel d’adhésion 2026-2027 doit être associé à Longjumeau');
  assert.match(fallback.getRegistrationUrl('Centre Sportif Charcot - Paris 13e') || '', /helloasso\.com/,
    'Le lien officiel doit être retrouvé pour Paris 13e');
  assert.match(fallback.getRegistrationUrl('Acrobaties (Longjumeau)') || '', /helloasso\.com/,
    'Le lien officiel doit être retrouvé pour le cours Acrobaties à Longjumeau');
  assert.equal(
    fallback.getRegistrationUrl('Cergy'),
    'https://www.helloasso.com/beta/associations/luta-na-danca/adhesions/inscription-cours-de-capoeira-2026-2027',
    'Le formulaire Luta Na Dança doit être associé uniquement à Cergy',
  );
  assert.equal(
    fallback.getRegistrationUrl('Les Lilas'),
    'https://www.helloasso.com/beta/associations/association-orion-capoeira/adhesions/adhesion-capoeira-et-ou-hip-hop-2026-2027',
    'Le formulaire Association Orion Capoeira doit être associé uniquement aux Lilas',
  );
  assert.equal(fallback.getRegistrationUrl('Aix-en-Provence (CREPS)'), '', 'Le lien des Lilas ne doit pas être appliqué aux autres associations');

  const components = read('assets/js/components.js');
  assert.match(components, /CEA_FALLBACK/, 'Le pied de page doit disposer de contacts de secours');
}

runFallbackDataTests();
runPageIntegrationTests();
console.log('site-resilience: OK');
