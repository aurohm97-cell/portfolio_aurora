import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      nav: {
        about: 'Sobre mí',
        projects: 'Proyectos',
        skills: 'Habilidades',
        education: 'Formación',
        experience: 'Experiencia',
        contact: 'Contacto',
      },
      hero: {
        greeting: 'Hola, soy',
        title: 'Frontend Developer',
        subtitle: 'De la atención al público al frontend — con alma de diseñadora y el usuario siempre en el centro',
        cta_projects: 'Ver proyectos',
        cta_contact: 'Contacta conmigo',
      },

      about: {
  title: 'Del Frontoffice al Frontend',
  p1: 'Profesional del turismo reconvertida en Frontend Developer, con años de experiencia como recepcionista y un ojo especialmente entrenado para el detalle, la estética y la experiencia del usuario.',
  p2: 'Siempre he creído que un buen producto no solo funciona — también se siente bien. Esa convicción me llevó al mundo del frontend, donde la técnica y el diseño se dan la mano para crear interfaces que los usuarios disfrutan usar.',
  p3: 'Mi trayectoria en atención al cliente me ha dado algo que no se aprende en ningún bootcamp: la capacidad de entender qué necesita realmente el usuario, más allá de lo que dice.',

  tree_effort: 'ESFUERZO',
tree_team: 'Equipo',
tree_simplify: 'Simplificar',
tree_explain: 'Explicar',
tree_understand: 'Entender',
},

      projects: {
  trello_subtitle: 'Trello Clone',
  trello_description: 'Aplicación de gestión de tareas con tableros al estilo Trello. Incluye autenticación, registro, drag & drop, prioridades y CRUD completo de tareas.',
}, education: {
  complementary: 'Formación complementaria',
  featured: [
    { title: 'Bachillerato', institution: 'EE.PP. Sagrada Familia, Baena', period: '2013 - 2015' },
    { title: 'FPGS Guía, Información y Asistencia Turística', institution: 'I.E.S. Cánovas del Castillo, Málaga', period: '2015 - 2017' },
    { title: 'FPGS Agencia de Viajes y Gestión de Eventos', institution: 'I.E.S. La Rosaleda, Málaga', period: '2017 - 2019' },
    { title: 'Marketing Digital', institution: 'Generation Spain y Fundación Incyde', period: '2019' },
    { title: 'FPGS DAW - Desarrollo de Aplicaciones Web', institution: 'Ilerna Online', period: '2024 - 07/2026' },
  ],
  complementaryItems: [
    { title: 'Socorrista en instalaciones acuáticas y DEA', institution: 'Global Autoprotect', period: '2015' },
    { title: 'Administrativo (50h)', institution: 'Diputación de Granada', period: '2024' },
    { title: 'Certificado de Profesionalidad - Operaciones Auxiliares de Montaje y Mantenimiento de Sistemas Microinformáticos', institution: 'Junta de Andalucía · I.E.S. Luis Carrillo de Sotomayor, Baena', period: 'Marzo - Junio 2026' },
    { title: 'Autodidacta', institution: 'Creando mi portfolio con ayuda de la IA', period: 'Actualidad' },
  ],
}, experience: {
  reception_title: 'Recepción y gestión de reservas',
  guest_title: 'Guest Experience / Calidad',
  dev_title: 'Desarrollo de software',
  reception: [
    { role: 'Recepcionista y gestión de reservas', place: 'Meliá Sol y Nieve****, Sierra Nevada', period: 'Temporadas 2022 - 2025' },
    { role: 'Recepcionista y gestión de reservas', place: 'Hotel Tuc Blanc***, Baqueira Beret', period: 'Temporada 2021 - 2022' },
    { role: 'Recepcionista', place: 'Del Pintor Suites and Hotels***, Málaga', period: 'Julio - Octubre 2018' },
    { role: 'Recepcionista', place: 'Hostal Flamenco Camarón, Málaga', period: 'Mayo - Septiembre 2019' },
    { role: 'Recepcionista (Prácticas)', place: 'IBIS Málaga Centro**', period: 'Septiembre - Diciembre 2017' },
    { role: 'Recepcionista y gestión de reservas', place: 'Apartamentos Rurales Los Castillarejos***', period: 'Julio - Septiembre 2017' },
  ],
  guest: [
    { role: 'Guest Experience - Departamento de Calidad y recepción', place: 'Hotel Sol Milanos Pingüinos***, Menorca', period: 'Temporadas 2022 y 2023' },
  ],
  dev: [
    { role: 'Desarrolladora web en prácticas', place: 'Ventura Espejo S.L., Lucena', period: 'Abril - Julio 2026' },
  ],
},
contact: {
  title_cta: '¿Hablamos?',
  subtitle: 'Estoy buscando mi primera oportunidad como Frontend Developer. Si mi perfil encaja con lo que buscas, escríbeme.',
  phone_label: 'Móvil',
  email_label: 'Email',
  location_label: 'Ubicación',
  license_label: 'Permiso de conducir B',
  phone: '614459376',
  email: 'aurohm97@gmail.com',
  location: 'Baena, Córdoba',
},
skills: {
  languages_title: 'Idiomas',
  tech_title: 'Tecnologías',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Fluido — B1 acreditado' },
    { name: 'Francés', level: 'Fluido' },
  ],
},
    }
  },
  en: {
    translation: {
      nav: {
        about: 'About me',
        projects: 'Projects',
        skills: 'Skills',
        education: 'Education',
        experience: 'Experience',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hi, I\'m',
        title: 'Frontend Developer',
        subtitle: 'From customer service to frontend — with a designer\'s soul and the user always at the center',
        cta_projects: 'View projects',
        cta_contact: 'Get in touch',
      },

      about: {
  title: 'From Front Office to Frontend',
  p1: 'A tourism professional turned Frontend Developer, with years of experience as a receptionist and a finely trained eye for detail, aesthetics and user experience.',
  p2: 'I have always believed that a great product doesn\'t just work — it feels right. That conviction led me to the world of frontend, where craft and design come together to create interfaces users truly enjoy.',
  p3: 'My background in customer-facing roles has given me something no bootcamp teaches: the ability to understand what users really need, beyond what they say.',

tree_effort: 'EFFORT',
tree_team: 'Teamwork',
tree_simplify: 'Simplify',
tree_explain: 'Explain',
tree_understand: 'Understand',

},

      projects: {
  trello_subtitle: 'Trello Clone',
  trello_description: 'Task management app with Trello-style boards. Features authentication, registration, drag & drop, priorities and full task CRUD.',
},
education: {
  complementary: 'Additional training',
  featured: [
    { title: 'High School Diploma', institution: 'EE.PP. Sagrada Familia, Baena', period: '2013 - 2015' },
    { title: 'Higher Vocational Training in Tourist Information and Guidance', institution: 'I.E.S. Cánovas del Castillo, Málaga', period: '2015 - 2017' },
    { title: 'Higher Vocational Training in Travel Agency and Event Management', institution: 'I.E.S. La Rosaleda, Málaga', period: '2017 - 2019' },
    { title: 'Digital Marketing', institution: 'Generation Spain and Fundación Incyde', period: '2019' },
    { title: 'Higher Vocational Training in Web Application Development (DAW)', institution: 'Ilerna Online', period: '2024 - 07/2026' },
  ],
  complementaryItems: [
    { title: 'Water Rescue and AED Certification', institution: 'Global Autoprotect', period: '2015' },
    { title: 'Administrative Assistant (50h)', institution: 'Diputación de Granada', period: '2024' },
    { title: 'Professional Certificate - Auxiliary Operations in Microcomputer System Assembly and Maintenance', institution: 'Junta de Andalucía · I.E.S. Luis Carrillo de Sotomayor, Baena', period: 'March - June 2026' },
    { title: 'Self-taught', institution: 'Building my portfolio with the help of AI', period: 'Ongoing' },
  ],
},
experience: {
  reception_title: 'Front Desk & Reservations',
  guest_title: 'Guest Experience / Quality',
  dev_title: 'Software Development',
  reception: [
    { role: 'Receptionist & Reservations Management', place: 'Meliá Sol y Nieve****, Sierra Nevada', period: 'Seasons 2022 - 2025' },
    { role: 'Receptionist & Reservations Management', place: 'Hotel Tuc Blanc***, Baqueira Beret', period: 'Season 2021 - 2022' },
    { role: 'Receptionist', place: 'Del Pintor Suites and Hotels***, Málaga', period: 'July - October 2018' },
    { role: 'Receptionist', place: 'Hostal Flamenco Camarón, Málaga', period: 'May - September 2019' },
    { role: 'Receptionist (Trainee)', place: 'IBIS Málaga Centro**', period: 'September - December 2017' },
    { role: 'Receptionist & Reservations Management', place: 'Apartamentos Rurales Los Castillarejos***', period: 'July - September 2017' },
  ],
  guest: [
    { role: 'Guest Experience - Quality Department & Front Desk', place: 'Hotel Sol Milanos Pingüinos***, Menorca', period: 'Seasons 2022 and 2023' },
  ],
  dev: [
    { role: 'Web Developer Intern', place: 'Ventura Espejo S.L., Lucena', period: 'April - July 2026' },
  ],
},
contact: {
  title_cta: "Let's talk",
  subtitle: "I'm looking for my first opportunity as a Frontend Developer. If my profile fits what you're looking for, get in touch.",
  phone_label: 'Phone',
  email_label: 'Email',
  location_label: 'Location',
  license_label: "Driving licence (Category B)",
  phone: '614459376',
  email: 'aurohm97@gmail.com',
  location: 'Baena, Córdoba (Spain)',
},
skills: {
  languages_title: 'Languages',
  tech_title: 'Technologies',
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Fluent — B1 certified' },
    { name: 'French', level: 'Fluent' },
  ],
},
    }
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        projects: 'Projets',
        skills: 'Compétences',
        education: 'Formation',
        experience: 'Expérience',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Bonjour, je suis',
        title: 'Frontend Developer',
        subtitle: 'De l\'accueil client au frontend — avec l\'âme d\'une designer et l\'utilisateur toujours au centre',
        cta_projects: 'Voir les projets',
        cta_contact: 'Me contacter',
      },

      about: {
  title: 'Du Front Office au Frontend',
  p1: 'Professionnelle du tourisme reconvertie en Frontend Developer, avec des années d\'expérience en tant que réceptionniste et un œil aiguisé pour le détail, l\'esthétique et l\'expérience utilisateur.',
  p2: 'J\'ai toujours cru qu\'un bon produit ne se contente pas de fonctionner — il se ressent. Cette conviction m\'a conduite vers le monde du frontend, où la technique et le design s\'unissent pour créer des interfaces que les utilisateurs apprécient vraiment.',
  p3: 'Mon parcours en relation client m\'a apporté quelque chose qu\'aucun bootcamp n\'enseigne : la capacité de comprendre ce dont l\'utilisateur a vraiment besoin, au-delà de ce qu\'il exprime.',

  tree_effort: 'EFFORT',
tree_team: 'Équipe',
tree_simplify: 'Simplifier',
tree_explain: 'Expliquer',
tree_understand: 'Comprendre',

},

      projects: {
  trello_subtitle: 'Clone de Trello',
  trello_description: 'Application de gestion de tâches avec des tableaux style Trello. Inclut authentification, inscription, drag & drop, priorités et CRUD complet.',
}, education: {
  complementary: 'Formation complémentaire',
  featured: [
    { title: 'Baccalauréat', institution: 'EE.PP. Sagrada Familia, Baena', period: '2013 - 2015' },
    { title: 'BTS Guide, Information et Assistance Touristique', institution: 'I.E.S. Cánovas del Castillo, Málaga', period: '2015 - 2017' },
    { title: 'BTS Agence de Voyages et Gestion d\'Événements', institution: 'I.E.S. La Rosaleda, Málaga', period: '2017 - 2019' },
    { title: 'Marketing Digital', institution: 'Generation Spain et Fondation Incyde', period: '2019' },
    { title: 'BTS Développement d\'Applications Web (DAW)', institution: 'Ilerna Online', period: '2024 - 07/2026' },
  ],
  complementaryItems: [
    { title: 'Sauveteur aquatique et certification DEA', institution: 'Global Autoprotect', period: '2015' },
    { title: 'Assistant administratif (50h)', institution: 'Diputación de Granada', period: '2024' },
    { title: 'Certificat de Professionnalisation - Opérations Auxiliaires de Montage et Maintenance de Systèmes Micro-informatiques', institution: 'Junta de Andalucía · I.E.S. Luis Carrillo de Sotomayor, Baena', period: 'Mars - Juin 2026' },
    { title: 'Autodidacte', institution: 'Création de mon portfolio avec l\'aide de l\'IA', period: 'En cours' },
  ],
}, 
experience: {
  reception_title: 'Réception et gestion des réservations',
  guest_title: 'Guest Experience / Qualité',
  dev_title: 'Développement logiciel',
  reception: [
    { role: 'Réceptionniste et gestion des réservations', place: 'Meliá Sol y Nieve****, Sierra Nevada', period: 'Saisons 2022 - 2025' },
    { role: 'Réceptionniste et gestion des réservations', place: 'Hotel Tuc Blanc***, Baqueira Beret', period: 'Saison 2021 - 2022' },
    { role: 'Réceptionniste', place: 'Del Pintor Suites and Hotels***, Málaga', period: 'Juillet - Octobre 2018' },
    { role: 'Réceptionniste', place: 'Hostal Flamenco Camarón, Málaga', period: 'Mai - Septembre 2019' },
    { role: 'Réceptionniste (Stage)', place: 'IBIS Málaga Centro**', period: 'Septembre - Décembre 2017' },
    { role: 'Réceptionniste et gestion des réservations', place: 'Apartamentos Rurales Los Castillarejos***', period: 'Juillet - Septembre 2017' },
  ],
  guest: [
    { role: 'Guest Experience - Département Qualité et réception', place: 'Hotel Sol Milanos Pingüinos***, Menorca', period: 'Saisons 2022 et 2023' },
  ],
  dev: [
    { role: 'Développeuse web stagiaire', place: 'Ventura Espejo S.L., Lucena', period: 'Avril - Juillet 2026' },
  ],
},
contact: {
  title_cta: 'On en discute ?',
  subtitle: "Je recherche ma première opportunité en tant que Frontend Developer. Si mon profil correspond à ce que vous cherchez, contactez-moi.",
  phone_label: 'Téléphone',
  email_label: 'Email',
  location_label: 'Localisation',
  license_label: 'Permis de conduire B',
  phone: '614459376',
  email: 'aurohm97@gmail.com',
  location: 'Baena, Córdoba (Espagne)',
},
skills: {
  languages_title: 'Langues',
  tech_title: 'Technologies',
  languages: [
    { name: 'Espagnol', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Courant — B1 certifié' },
    { name: 'Français', level: 'Courant' },
  ],
},
    } 
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
