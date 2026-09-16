(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  root.CEA_FALLBACK = data;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const instagram = "https://www.instagram.com/capoeira.em.acao.france/";
  const capoeiraStreetRegistration = "https://www.helloasso.com/associations/capoeira-street-et-disciplines-associees-capoeira-street-d-a/adhesions/adhesion-annuelle-2026-2027";

  function getRegistrationUrl(locationName) {
    const name = (locationName || "").toLocaleLowerCase("fr-FR");
    return name.includes("longjumeau") || name.includes("paris 13")
      ? capoeiraStreetRegistration
      : "";
  }

  return {
    getRegistrationUrl,
    general: {
      email: "assocapoeirastreet@gmail.com",
      instagram,
    },
    locations: [
      {
        name: "Aix-en-Provence (CREPS)",
        address: "62 chemin du Viaduc, 13100 Aix-en-Provence",
        description: "Cours de capoeira pour enfants, adolescents et adultes. Débutants bienvenus et cours d’essai gratuit.",
        contact_whatsapp: "33650610853",
        contact_email: "capoeira.em.acao.fr@gmail.com",
        contact_phone: "0650610853",
        contact_instagram: instagram,
        course_slots: [
          { schedule: "Lundi 18h00–18h45", teacher_name: "Contramestre Foguete", notes: "Enfants de 5 à 13 ans" },
          { schedule: "Lundi 19h00–20h00", teacher_name: "Contramestre Foguete", notes: "Adultes, 14 ans et plus" },
          { schedule: "Vendredi 18h00–20h00", teacher_name: "Contramestre Foguete", notes: "Adultes, 14 ans et plus" },
        ],
      },
      {
        name: "Centre sportif Charcot — Paris 13e",
        address: "80 rue du Chevaleret, 75013 Paris",
        description: "Cours de capoeira accessibles à tous les niveaux. Débutants bienvenus et cours d’essai gratuit.",
        contact_whatsapp: "0671371424",
        contact_email: "assocapoeirastreet@gmail.com",
        contact_phone: "0671371424",
        contact_instagram: instagram,
        registration_url: capoeiraStreetRegistration,
        course_slots: [
          { schedule: "Mardi 19h00–21h00", teacher_name: "Prof. Dadão", notes: "14 ans et plus" },
        ],
      },
      {
        name: "Cergy",
        address: "Groupe scolaire du Petit Vent, 1 place des Saisons, 95000 Cergy",
        description: "Cours de capoeira accessibles à tous les niveaux. Débutants bienvenus et cours d’essai gratuit.",
        contact_whatsapp: "0667639357",
        contact_email: "yves_barros@live.fr",
        contact_phone: "0667639357",
        contact_instagram: instagram,
        course_slots: [
          { schedule: "Lundi 19h00–20h30", teacher_name: "Formado Diamante (Yves Barros)", notes: "Tous niveaux" },
          { schedule: "Mercredi 20h00–21h30", teacher_name: "Formado Diamante (Yves Barros)", notes: "Tous niveaux" },
          { schedule: "Samedi 10h30–12h30", teacher_name: "Formado Diamante (Yves Barros)", notes: "Tous niveaux" },
        ],
      },
      {
        name: "Les Lilas",
        address: "Gymnase Masha Amini, 26 avenue de la Liberté, 93260 Les Lilas",
        description: "Cours de capoeira dès 5 ans. Débutants bienvenus et cours d’essai gratuit.",
        contact_whatsapp: "33666107579",
        contact_email: "capoeira.ebc.orioncapoeira@gmail.com",
        contact_phone: "33666107579",
        contact_instagram: instagram,
        course_slots: [
          { schedule: "Jeudi 17h45–18h45", teacher_name: "Prof. Dadão / Grad. Lagrima", notes: "Dès 5 ans" },
        ],
      },
      {
        name: "Longjumeau",
        address: "Gymnase Charles Rigoulot, 25 rue Léontine Sohier, 91160 Longjumeau",
        description: "Cours enfants, adolescents et adultes, avec travail technique et acrobatique. Cours d’essai gratuit.",
        contact_whatsapp: "0629916402",
        contact_email: "assocapoeirastreet@gmail.com",
        contact_phone: "0629916402",
        contact_instagram: instagram,
        registration_url: capoeiraStreetRegistration,
        course_slots: [
          { schedule: "Mercredi 18h00–19h00", teacher_name: "Prof. Dadão / Grad. Suricato", notes: "Enfants de 4 à 12 ans" },
          { schedule: "Jeudi 21h00–22h30", teacher_name: "Prof. Dadão / Grad. Suricato", notes: "Adolescents et adultes" },
          { schedule: "Dimanche 14h00–15h00", teacher_name: "Prof. Dadão / Grad. Suricato", notes: "Enfants de 4 à 12 ans" },
          { schedule: "Dimanche 15h00–17h00", teacher_name: "Prof. Dadão / Grad. Suricato", notes: "Adolescents et adultes" },
          { schedule: "Samedi 18h30–20h45", teacher_name: "Équipe Capoeira Street", notes: "Acrobaties — Adultes" },
        ],
      },
    ],
  };
});
