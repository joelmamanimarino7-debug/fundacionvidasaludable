/* ============================================================
   Fundación Vida Saludable — internacionalización ES / EN
   Traducción del lado del cliente sin duplicar páginas.
   ============================================================ */
(function () {
  const translations = {
    es: {
      /* --- Navegación / header --- */
      "nav.home": "Inicio",
      "nav.team": "Nuestro Equipo",
      "nav.programs": "Programas y Proyectos",
      "nav.donate": "Apoyo y Donaciones",
      "btn.support": "Apoya",

      /* --- Footer --- */
      "footer.about": "Organización cristiana sin fines de lucro dedicada al desarrollo integral de niños, adolescentes, jóvenes y familias en Sucre, Bolivia.",
      "footer.navTitle": "Navegación",
      "footer.contactTitle": "Contacto",
      "footer.rights": "Todos los derechos reservados.",

      /* --- Inicio: hero --- */
      "hero.title": "Sembrando vida, <em>esperanza</em><br>y desarrollo integral",
      "hero.lead": "Somos una fundación cristiana sin fines de lucro que trabaja por el bienestar de niños, adolescentes, jóvenes, mujeres gestantes y familias en situación de vulnerabilidad.",
      "hero.cta1": "Apoya la misión",
      "hero.cta2": "Conoce nuestros programas",
      "hero.scroll": "Descubre más ↓",

      /* --- Inicio: quiénes somos --- */
      "about.eyebrow": "¿Quiénes somos?",
      "about.title": "Una fundación creada por cristianos, al servicio de la comunidad",
      "about.p1": "La Fundación Vida Saludable \"VISA\" es una organización sin fines de lucro, fundada por un grupo de personas que profesan la fe en Cristo, unidas por el amor a los niños, preadolescentes, adolescentes, jóvenes, mujeres en estado de gestación y comunidades más vulnerables.",
      "about.p2": "Los asistimos mediante convenios de cooperación con entidades públicas y privadas, creando centros de desarrollo integral y apoyo escolar: alternativas alimentarias, acompañamiento socioeducativo y acceso a servicios médicos básicos, todo basado en principios cristianos.",
      "about.btn": "Conoce a nuestro equipo",
      "about.badge": "Años de servicio",

      /* --- Inicio: visión / misión --- */
      "vision.eyebrow": "Visión 2029",
      "vision.h": "Hacia dónde vamos",
      "vision.p": "Ser una institución comprometida con programas que promuevan oportunidades de crecimiento integral en educación, salud y protección, basados en principios y valores.",
      "mission.eyebrow": "Misión",
      "mission.h": "Lo que hacemos cada día",
      "mission.p": "Somos sembradores que promovemos oportunidades para potenciar el bienestar de los niños, jóvenes y sus familias, con programas integrales que fortalecen la unidad familiar.",

      /* --- Inicio: valores --- */
      "values.eyebrow": "Nuestros valores",
      "values.title": "Los principios que guían nuestro trabajo",
      "values.sub": "Nuestros fundamentos están en valores sólidos que orientan cada una de nuestras acciones y decisiones, reflejando nuestro compromiso con niños, adolescentes, jóvenes y familias en vulnerabilidad.",
      "value.love.h": "Amor",
      "value.love.p": "Creemos que si amamos a Dios, demostraremos amor a nuestro prójimo.",
      "value.protection.h": "Protección",
      "value.protection.p": "Velamos por la integridad de cada niño y niña que forma parte de nuestros programas.",
      "value.excellence.h": "Excelencia",
      "value.excellence.p": "Realizamos nuestro trabajo con excelencia, para glorificar a Dios en cada acción.",
      "value.honesty.h": "Honestidad",
      "value.honesty.p": "Actuamos de manera íntegra y transparente en cada gestión de la fundación.",
      "value.authority.h": "Autoridad",
      "value.authority.p": "Reconocemos a Dios como la primera autoridad, sostén de toda autoridad humana.",
      "value.proactivity.h": "Proactividad",
      "value.proactivity.p": "Nos preparamos con anticipación para responder a los desafíos del futuro.",
      "value.service.h": "Servicio",
      "value.service.p": "Servimos primero a Dios y, a través de Él, a cada persona que lo necesita.",

      /* --- Inicio: CTA --- */
      "home.cta.eyebrow": "Súmate a la misión",
      "home.cta.title": "Cada contribución es una semilla de esperanza",
      "home.cta.p": "Con la ayuda de Dios todo es posible. Tu apoyo transforma la vida de niños, adolescentes y familias en Sucre.",
      "home.cta.btn": "Quiero apoyar",

      /* --- Equipo --- */
      "team.eyebrow": "Nuestro Equipo",
      "team.title": "Personas comprometidas con el servicio a Dios y a la comunidad",
      "team.sub": "Pastores, directorio, personal administrativo, tutoras y voluntarios trabajando juntos por el desarrollo integral de cada participante.",
      "team.group.pastors": "Pastores",
      "team.group.board": "Directorio",
      "team.group.admin": "Equipo administrativo",
      "team.group.volunteers": "Voluntariado y tutoría",
      "role.pastor.m": "Pastor",
      "role.pastor.f": "Pastora",
      "role.legalRep": "Representante Legal",
      "role.vicePresident": "Vicepresidenta",
      "role.treasurer": "Tesorero",
      "role.secretary": "Secretario",
      "role.member": "Vocal",
      "role.director": "Director",
      "role.adminAssistant": "Asistente Administrativo",
      "role.volunteer.f": "Voluntaria",
      "role.volunteer.m": "Voluntario",
      "role.implementer": "Implementadora",

      /* --- Programas --- */
      "prog.eyebrow": "Programas y Proyectos",
      "prog.title": "Un camino de desarrollo integral, paso a paso",
      "prog.sub": "Acompañamos a cada niño, niña, adolescente y joven según su etapa de vida, fortaleciendo su desarrollo espiritual, físico, cognitivo y socioemocional.",
      "prog1.num": "01 · Supervivencia",
      "prog1.age": "Prenatal — 1 año",
      "prog1.h": "Supervivencia",
      "prog1.p": "Las áreas de enfoque incluyen salud pre y postnatal, planificación familiar, lactancia, educación para padres, acercamiento infantil y formación espiritual para madres gestantes, madres y sus bebés.",
      "prog1.tag1": "Salud pre y postnatal",
      "prog1.tag2": "Educación para padres",
      "prog1.tag3": "Formación espiritual",
      "prog2.num": "02 · Base Hogar",
      "prog2.age": "1 — 5 años",
      "prog2.h": "Base Hogar",
      "prog2.p": "Cubre a los niños desde el primer año hasta los cinco años. Es la etapa en la que se abre la posibilidad de patrocinio, y el niño continúa recibiendo acompañamiento junto a un cuidador de referencia.",
      "prog2.tag1": "Patrocinio",
      "prog2.tag2": "Acompañamiento familiar",
      "prog2.tag3": "Estimulación temprana",
      "prog3.num": "03 · Triunfadores",
      "prog3.age": "6 — 11 años",
      "prog3.h": "Triunfadores",
      "prog3.p": "Los niños reciben intervenciones adecuadas para su edad, dentro de grupos de pares y en interacciones uno a uno con el personal del proyecto, además de actividades extracurriculares y de servicio.",
      "prog3.tag1": "Fe y valores",
      "prog3.tag2": "Actividades extracurriculares",
      "prog3.tag3": "Salud y bienestar",
      "prog4.num": "04 · Generación Restauradores",
      "prog4.age": "12 — 14 años",
      "prog4.h": "Generación Restauradores",
      "prog4.p": "Los adolescentes forman parte de una generación llamada a ser restaurada, para luego influir positivamente en sus familias, comunidades y nación, a través de un currículo y actividades complementarias de liderazgo.",
      "prog4.tag1": "Liderazgo de servicio",
      "prog4.tag2": "Cultura bíblica",
      "prog4.tag3": "Desarrollo de habilidades",
      "prog.cta.eyebrow": "Sé parte del cambio",
      "prog.cta.title": "Tu apoyo hace posible cada programa",
      "prog.cta.p": "Cada aporte se traduce en salud, educación y oportunidades reales para niños y familias de Sucre.",
      "prog.cta.btn": "Quiero apoyar",

      /* --- Donaciones --- */
      "don.eyebrow": "Apoyo y Donaciones",
      "don.title": "Con la ayuda de Dios, todo es posible",
      "don.sub": "Cada contribución que recibimos es una semilla de esperanza, destinada a nuestros programas de desarrollo integral.",
      "don.motto1": "\"Con la ayuda de Dios todo es posible.\"",
      "don.motto2": "\"Cada contribución que recibimos es una semilla de esperanza.\"",
      "don.channels.h": "Formas de conectar con nosotros",
      "don.wa.p": "+591 75791029 — escríbenos para coordinar tu aporte o consulta.",
      "don.fb.p": "Síguenos para conocer historias, campañas y actividades.",
      "don.btn": "Quiero apoyar por WhatsApp",
      "don.qr.h": "Pre-registro",
      "don.qr.p": "Escanea el código para el pre-registro de participantes en nuestros programas.",
      "don.dark.eyebrow": "Gracias por caminar con nosotros",
      "don.dark.title": "Cada aporte, oración y mensaje suma",
      "don.dark.p": "Ya sea con una donación, tu tiempo como voluntario o compartiendo nuestra misión, eres parte de la semilla de esperanza que sembramos cada día.",

      /* --- Títulos de pestaña / meta --- */
      "title.home": "Fundación Vida Saludable | Inicio",
      "title.team": "Nuestro Equipo | Fundación Vida Saludable",
      "title.programs": "Programas y Proyectos | Fundación Vida Saludable",
      "title.donate": "Apoyo y Donaciones | Fundación Vida Saludable"
    },

    en: {
      /* --- Navigation / header --- */
      "nav.home": "Home",
      "nav.team": "Our Team",
      "nav.programs": "Programs & Projects",
      "nav.donate": "Support & Donations",
      "btn.support": "Support",

      /* --- Footer --- */
      "footer.about": "A Christian non-profit organization dedicated to the holistic development of children, teens, youth and families in Sucre, Bolivia.",
      "footer.navTitle": "Navigation",
      "footer.contactTitle": "Contact",
      "footer.rights": "All rights reserved.",

      /* --- Home: hero --- */
      "hero.title": "Sowing life, <em>hope</em><br>and holistic development",
      "hero.lead": "We are a Christian non-profit foundation working for the wellbeing of children, teens, youth, expectant mothers and families in vulnerable situations.",
      "hero.cta1": "Support the mission",
      "hero.cta2": "Explore our programs",
      "hero.scroll": "Discover more ↓",

      /* --- Home: about --- */
      "about.eyebrow": "Who we are",
      "about.title": "A foundation created by Christians, serving the community",
      "about.p1": "Fundación Vida Saludable \"VISA\" is a non-profit organization, founded by a group of people who profess faith in Christ, united by their love for children, preteens, teens, youth, expectant mothers and the most vulnerable communities.",
      "about.p2": "We assist them through cooperation agreements with public and private entities, creating centers for holistic development and school support: food alternatives, socio-educational guidance and access to basic medical services, all based on Christian principles.",
      "about.btn": "Meet our team",
      "about.badge": "Years of service",

      /* --- Home: vision / mission --- */
      "vision.eyebrow": "Vision 2029",
      "vision.h": "Where we are headed",
      "vision.p": "To be an institution committed to programs that foster opportunities for holistic growth in education, health and protection, grounded in principles and values.",
      "mission.eyebrow": "Mission",
      "mission.h": "What we do every day",
      "mission.p": "We are sowers who foster opportunities to enhance the wellbeing of children, youth and their families, through holistic programs that strengthen family unity.",

      /* --- Home: values --- */
      "values.eyebrow": "Our values",
      "values.title": "The principles that guide our work",
      "values.sub": "Our foundations rest on solid values that guide each of our actions and decisions, reflecting our commitment to children, teens, youth and families in vulnerable situations.",
      "value.love.h": "Love",
      "value.love.p": "We believe that if we love God, we will show love to our neighbor.",
      "value.protection.h": "Protection",
      "value.protection.p": "We safeguard the integrity of every child who is part of our programs.",
      "value.excellence.h": "Excellence",
      "value.excellence.p": "We carry out our work with excellence, to glorify God in every action.",
      "value.honesty.h": "Honesty",
      "value.honesty.p": "We act with integrity and transparency in every effort of the foundation.",
      "value.authority.h": "Authority",
      "value.authority.p": "We recognize God as the first authority, the support of all human authority.",
      "value.proactivity.h": "Proactivity",
      "value.proactivity.p": "We prepare ahead of time to respond to the challenges of the future.",
      "value.service.h": "Service",
      "value.service.p": "We serve God first and, through Him, every person in need.",

      /* --- Home: CTA --- */
      "home.cta.eyebrow": "Join the mission",
      "home.cta.title": "Every contribution is a seed of hope",
      "home.cta.p": "With God's help, everything is possible. Your support transforms the lives of children, teens and families in Sucre.",
      "home.cta.btn": "I want to help",

      /* --- Team --- */
      "team.eyebrow": "Our Team",
      "team.title": "People committed to serving God and the community",
      "team.sub": "Pastors, board, administrative staff, mentors and volunteers working together for the holistic development of every participant.",
      "team.group.pastors": "Pastors",
      "team.group.board": "Board of Directors",
      "team.group.admin": "Administrative Team",
      "team.group.volunteers": "Volunteers & Mentoring",
      "role.pastor.m": "Pastor",
      "role.pastor.f": "Pastor",
      "role.legalRep": "Legal Representative",
      "role.vicePresident": "Vice President",
      "role.treasurer": "Treasurer",
      "role.secretary": "Secretary",
      "role.member": "Board Member",
      "role.director": "Director",
      "role.adminAssistant": "Administrative Assistant",
      "role.volunteer.f": "Volunteer",
      "role.volunteer.m": "Volunteer",
      "role.implementer": "Program Implementer",

      /* --- Programs --- */
      "prog.eyebrow": "Programs & Projects",
      "prog.title": "A path of holistic development, step by step",
      "prog.sub": "We walk alongside every child, teen and young person according to their stage of life, strengthening their spiritual, physical, cognitive and social-emotional development.",
      "prog1.num": "01 · Survival",
      "prog1.age": "Prenatal — 1 year",
      "prog1.h": "Survival",
      "prog1.p": "Focus areas include pre- and postnatal health, family planning, breastfeeding, parent education, early childhood outreach and spiritual formation for expectant mothers, mothers and their babies.",
      "prog1.tag1": "Pre- & postnatal health",
      "prog1.tag2": "Parent education",
      "prog1.tag3": "Spiritual formation",
      "prog2.num": "02 · Home Base",
      "prog2.age": "1 — 5 years",
      "prog2.h": "Home Base",
      "prog2.p": "Covers children from their first year up to age five. This is the stage where sponsorship becomes possible, and the child continues to receive support alongside a reference caregiver.",
      "prog2.tag1": "Sponsorship",
      "prog2.tag2": "Family support",
      "prog2.tag3": "Early stimulation",
      "prog3.num": "03 · Achievers",
      "prog3.age": "6 — 11 years",
      "prog3.h": "Achievers",
      "prog3.p": "Children receive age-appropriate interventions, within peer groups and in one-on-one interactions with project staff, along with extracurricular and service activities.",
      "prog3.tag1": "Faith & values",
      "prog3.tag2": "Extracurricular activities",
      "prog3.tag3": "Health & wellbeing",
      "prog4.num": "04 · Restorers Generation",
      "prog4.age": "12 — 14 years",
      "prog4.h": "Restorers Generation",
      "prog4.p": "Teens are part of a generation called to be restored, so they can then positively influence their families, communities and nation, through a curriculum and complementary leadership activities.",
      "prog4.tag1": "Servant leadership",
      "prog4.tag2": "Biblical culture",
      "prog4.tag3": "Skill development",
      "prog.cta.eyebrow": "Be part of the change",
      "prog.cta.title": "Your support makes every program possible",
      "prog.cta.p": "Every contribution turns into health, education and real opportunities for children and families in Sucre.",
      "prog.cta.btn": "I want to help",

      /* --- Donations --- */
      "don.eyebrow": "Support & Donations",
      "don.title": "With God's help, everything is possible",
      "don.sub": "Every contribution we receive is a seed of hope, devoted to our holistic development programs.",
      "don.motto1": "\"With God's help, everything is possible.\"",
      "don.motto2": "\"Every contribution we receive is a seed of hope.\"",
      "don.channels.h": "Ways to connect with us",
      "don.wa.p": "+591 75791029 — message us to coordinate your contribution or inquiry.",
      "don.fb.p": "Follow us for stories, campaigns and activities.",
      "don.btn": "Support us via WhatsApp",
      "don.qr.h": "Pre-registration",
      "don.qr.p": "Scan the code to pre-register participants for our programs.",
      "don.dark.eyebrow": "Thank you for walking with us",
      "don.dark.title": "Every gift, prayer and message counts",
      "don.dark.p": "Whether through a donation, your time as a volunteer or by sharing our mission, you are part of the seed of hope we sow each day.",

      /* --- Tab titles / meta --- */
      "title.home": "Fundación Vida Saludable | Home",
      "title.team": "Our Team | Fundación Vida Saludable",
      "title.programs": "Programs & Projects | Fundación Vida Saludable",
      "title.donate": "Support & Donations | Fundación Vida Saludable"
    }
  };

  function getStoredLang() {
    const s = localStorage.getItem('lang');
    return (s === 'en' || s === 'es') ? s : 'es';
  }

  let lang = getStoredLang();

  function apply(l) {
    lang = l;
    const dict = translations[l] || translations.es;
    document.documentElement.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    const page = document.body.getAttribute('data-page');
    if (page) {
      const t = dict['title.' + page];
      if (t) document.title = t;
    }

    document.querySelectorAll('.lang-toggle [data-lang]').forEach(s => {
      s.classList.toggle('is-active', s.getAttribute('data-lang') === l);
    });

    const y = document.getElementById('year');
    if (y && !y.textContent) y.textContent = new Date().getFullYear();
  }

  function init() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', () => apply(lang === 'es' ? 'en' : 'es'));
    }
    apply(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
