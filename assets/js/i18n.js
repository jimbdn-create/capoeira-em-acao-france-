// ============================================
// Système de traduction (FR / EN / PT)
// ============================================
const translations = {
  fr: {
    nav_home: "Accueil", nav_capoeira: "La Capoeira", nav_locations: "Nos lieux",
    nav_events: "Événements", nav_gallery: "Galerie", nav_videos: "Vidéos",
    nav_songs: "Chansons", nav_courses: "Cours en ligne", nav_join: "Rejoindre un cours",
    footer_school: "École", footer_nav: "Navigation", footer_contact: "Contact",
    footer_admin: "Espace admin", footer_desc: "École de Capoeira affiliée à l'académie internationale du Mestre Cascavel. Cours, stages et événements en Île-de-France et à Aix-en-Provence.",
    footer_contact_loading: "Chargement…",

    hero_eyebrow: "École affiliée — Mestre Cascavel",
    hero_lead: "Capoeira em Ação France rassemble cinq lieux de pratique en Île-de-France et à Aix-en-Provence, pour tous les âges et tous les niveaux.",
    btn_find_course: "Trouver un cours", btn_discover: "Découvrir la capoeira",
    section_school_eyebrow: "L'école", section_school_title: "Une seule académie, cinq roda",
    section_locations_eyebrow: "Nos lieux", section_locations_title: "Cinq sites, une même énergie",
    section_events_eyebrow: "Agenda", section_events_title: "Prochains événements",
    btn_see_all_locations: "Voir tous les lieux et horaires", btn_see_calendar: "Voir le calendrier complet",
    loading_locations: "Chargement des lieux…", loading_events: "Chargement des événements…",

    page_capoeira_eyebrow: "Art — Jeu — Combat — Musique", page_capoeira_title1: "Qu'est-ce que",
    page_capoeira_title_accent: "la Capoeira", page_capoeira_lead: "Née au Brésil du métissage des cultures africaines, la capoeira mêle mouvement martial, acrobatie, musique et tradition orale au sein d'une roda — le cercle où tout se joue.",
    cta_ready: "Prêt à rejoindre une roda ?", btn_see_locations: "Voir les lieux de cours", btn_see_stages: "Voir les prochains stages",

    page_locations_eyebrow: "Île-de-France & Provence", page_locations_title1: "Nos", page_locations_title_accent: "lieux", page_locations_title2: "de cours",
    page_locations_lead: "Cinq sites de pratique : Longjumeau, Paris 13e, Cergy-le-Haut, Les Lilas et Aix-en-Provence.",
    loading_generic: "Chargement…",
    btn_whatsapp: "Contacter sur WhatsApp", btn_email: "Envoyer un e-mail", btn_call: "Appeler",

    page_events_eyebrow: "Agenda", page_events_title1: "Événements", page_events_title_accent: "& stages",
    page_events_lead: "Cours réguliers, stages, batizados et rencontres internationales.",
    empty_events: "Aucun événement publié pour le moment. Revenez bientôt !",

    page_gallery_eyebrow: "Galerie", page_gallery_title1: "Photos", page_gallery_title_accent: "de nos rodas",
    page_gallery_lead: "Cours, stages et batizados, capturés au fil des sessions.",
    empty_photos: "Aucune photo publiée pour le moment.",

    page_videos_eyebrow: "Galerie", page_videos_title1: "Vidéos", page_videos_title_accent: "& roda live",
    page_videos_lead: "Extraits de rodas, démonstrations et moments de stages.",
    empty_videos: "Aucune vidéo publiée pour le moment.",

    page_songs_eyebrow: "Musicalité", page_songs_title1: "Chansons", page_songs_title_accent: "de Capoeira",
    page_songs_lead: "Paroles, traduction en français, et un lien pour apprendre à les chanter.",
    empty_songs: "Aucune chanson publiée pour le moment.",
    label_lyrics: "Paroles", label_translation: "Traduction française",

    page_courses_eyebrow: "À distance", page_courses_title1: "Cours", page_courses_title_accent: "en ligne",
    page_courses_lead: "Le travail de nos professeurs, en Île-de-France et à Aix-en-Provence, accessible où que vous soyez.",
    empty_courses: "Aucun cours en ligne publié pour le moment.",
    student_login: "Espace élève — Se connecter", pill_public: "Public", pill_reserved: "Réservé aux élèves",
  },
  en: {
    nav_home: "Home", nav_capoeira: "Capoeira", nav_locations: "Our locations",
    nav_events: "Events", nav_gallery: "Gallery", nav_videos: "Videos",
    nav_songs: "Songs", nav_courses: "Online courses", nav_join: "Join a class",
    footer_school: "School", footer_nav: "Navigation", footer_contact: "Contact",
    footer_admin: "Admin area", footer_desc: "Capoeira school affiliated with Mestre Cascavel's international academy. Classes, workshops and events across the Paris region and Aix-en-Provence.",
    footer_contact_loading: "Loading…",

    hero_eyebrow: "Affiliated school — Mestre Cascavel",
    hero_lead: "Capoeira em Ação France brings together five practice locations across the Paris region and Aix-en-Provence, for all ages and levels.",
    btn_find_course: "Find a class", btn_discover: "Discover capoeira",
    section_school_eyebrow: "The school", section_school_title: "One academy, five roda",
    section_locations_eyebrow: "Our locations", section_locations_title: "Five sites, one energy",
    section_events_eyebrow: "Agenda", section_events_title: "Upcoming events",
    btn_see_all_locations: "See all locations and schedules", btn_see_calendar: "See the full calendar",
    loading_locations: "Loading locations…", loading_events: "Loading events…",

    page_capoeira_eyebrow: "Art — Play — Combat — Music", page_capoeira_title1: "What is",
    page_capoeira_title_accent: "Capoeira", page_capoeira_lead: "Born in Brazil from the blending of African cultures, capoeira combines martial movement, acrobatics, music and oral tradition within a roda — the circle where it all happens.",
    cta_ready: "Ready to join a roda?", btn_see_locations: "See class locations", btn_see_stages: "See upcoming workshops",

    page_locations_eyebrow: "Paris region & Provence", page_locations_title1: "Our", page_locations_title_accent: "class", page_locations_title2: "locations",
    page_locations_lead: "Five practice sites: Longjumeau, Paris 13th, Cergy-le-Haut, Les Lilas and Aix-en-Provence.",
    loading_generic: "Loading…",
    btn_whatsapp: "Contact on WhatsApp", btn_email: "Send an email", btn_call: "Call",

    page_events_eyebrow: "Agenda", page_events_title1: "Events", page_events_title_accent: "& workshops",
    page_events_lead: "Regular classes, workshops, batizados and international gatherings.",
    empty_events: "No events published yet. Check back soon!",

    page_gallery_eyebrow: "Gallery", page_gallery_title1: "Photos", page_gallery_title_accent: "from our rodas",
    page_gallery_lead: "Classes, workshops and batizados, captured over the sessions.",
    empty_photos: "No photos published yet.",

    page_videos_eyebrow: "Gallery", page_videos_title1: "Videos", page_videos_title_accent: "& live roda",
    page_videos_lead: "Roda highlights, demonstrations and workshop moments.",
    empty_videos: "No videos published yet.",

    page_songs_eyebrow: "Musicality", page_songs_title1: "Capoeira", page_songs_title_accent: "Songs",
    page_songs_lead: "Lyrics, French translation, and a link to learn how to sing them.",
    empty_songs: "No songs published yet.",
    label_lyrics: "Lyrics", label_translation: "French translation",

    page_courses_eyebrow: "Remote", page_courses_title1: "Online", page_courses_title_accent: "courses",
    page_courses_lead: "The work of our teachers, across the Paris region and Aix-en-Provence, accessible wherever you are.",
    empty_courses: "No online courses published yet.",
    student_login: "Student area — Log in", pill_public: "Public", pill_reserved: "Students only",
  },
  pt: {
    nav_home: "Início", nav_capoeira: "A Capoeira", nav_locations: "Nossos locais",
    nav_events: "Eventos", nav_gallery: "Galeria", nav_videos: "Vídeos",
    nav_songs: "Músicas", nav_courses: "Aulas online", nav_join: "Entrar numa aula",
    footer_school: "Escola", footer_nav: "Navegação", footer_contact: "Contato",
    footer_admin: "Área admin", footer_desc: "Escola de Capoeira afiliada à academia internacional do Mestre Cascavel. Aulas, workshops e eventos na região de Paris e em Aix-en-Provence.",
    footer_contact_loading: "Carregando…",

    hero_eyebrow: "Escola afiliada — Mestre Cascavel",
    hero_lead: "A Capoeira em Ação France reúne cinco locais de prática na região de Paris e em Aix-en-Provence, para todas as idades e níveis.",
    btn_find_course: "Encontrar uma aula", btn_discover: "Descobrir a capoeira",
    section_school_eyebrow: "A escola", section_school_title: "Uma só academia, cinco rodas",
    section_locations_eyebrow: "Nossos locais", section_locations_title: "Cinco lugares, uma só energia",
    section_events_eyebrow: "Agenda", section_events_title: "Próximos eventos",
    btn_see_all_locations: "Ver todos os locais e horários", btn_see_calendar: "Ver calendário completo",
    loading_locations: "Carregando locais…", loading_events: "Carregando eventos…",

    page_capoeira_eyebrow: "Arte — Jogo — Combate — Música", page_capoeira_title1: "O que é a",
    page_capoeira_title_accent: "Capoeira", page_capoeira_lead: "Nascida no Brasil da mistura das culturas africanas, a capoeira une movimento marcial, acrobacia, música e tradição oral dentro de uma roda — o círculo onde tudo acontece.",
    cta_ready: "Pronto para entrar numa roda?", btn_see_locations: "Ver locais de aula", btn_see_stages: "Ver próximos workshops",

    page_locations_eyebrow: "Região de Paris & Provença", page_locations_title1: "Nossos", page_locations_title_accent: "locais", page_locations_title2: "de aula",
    page_locations_lead: "Cinco locais de prática: Longjumeau, Paris 13e, Cergy-le-Haut, Les Lilas e Aix-en-Provence.",
    loading_generic: "Carregando…",
    btn_whatsapp: "Contatar pelo WhatsApp", btn_email: "Enviar um e-mail", btn_call: "Ligar",

    page_events_eyebrow: "Agenda", page_events_title1: "Eventos", page_events_title_accent: "& workshops",
    page_events_lead: "Aulas regulares, workshops, batizados e encontros internacionais.",
    empty_events: "Nenhum evento publicado por enquanto. Volte em breve!",

    page_gallery_eyebrow: "Galeria", page_gallery_title1: "Fotos", page_gallery_title_accent: "das nossas rodas",
    page_gallery_lead: "Aulas, workshops e batizados, capturados ao longo das sessões.",
    empty_photos: "Nenhuma foto publicada por enquanto.",

    page_videos_eyebrow: "Galeria", page_videos_title1: "Vídeos", page_videos_title_accent: "& roda ao vivo",
    page_videos_lead: "Trechos de rodas, demonstrações e momentos de workshops.",
    empty_videos: "Nenhum vídeo publicado por enquanto.",

    page_songs_eyebrow: "Musicalidade", page_songs_title1: "Músicas", page_songs_title_accent: "de Capoeira",
    page_songs_lead: "Letras, tradução em francês, e um link para aprender a cantá-las.",
    empty_songs: "Nenhuma música publicada por enquanto.",
    label_lyrics: "Letra", label_translation: "Tradução em francês",

    page_courses_eyebrow: "À distância", page_courses_title1: "Aulas", page_courses_title_accent: "online",
    page_courses_lead: "O trabalho dos nossos professores, na região de Paris e em Aix-en-Provence, acessível de qualquer lugar.",
    empty_courses: "Nenhuma aula online publicada por enquanto.",
    student_login: "Área do aluno — Entrar", pill_public: "Público", pill_reserved: "Somente alunos",
  }
};

function getCurrentLang() {
  return localStorage.getItem("site_lang") || "fr";
}

function applyTranslations() {
  const lang = getCurrentLang();
  const dict = translations[lang] || translations.fr;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-flag").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function setLang(lang) {
  localStorage.setItem("site_lang", lang);
  applyTranslations();
}

function renderLangSwitcher() {
  const el = document.getElementById("lang-switcher");
  if (!el) return;
  el.innerHTML = `
    <button class="lang-flag" data-lang="fr" title="Français" onclick="setLang('fr')">🇫🇷</button>
    <button class="lang-flag" data-lang="en" title="English" onclick="setLang('en')">🇬🇧</button>
    <button class="lang-flag" data-lang="pt" title="Português" onclick="setLang('pt')">🇧🇷</button>
  `;
  applyTranslations();
}
