import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      nav: {
        about: 'Sobre mí',
        projects: 'Proyectos',
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
},
    }
  },
  en: {
    translation: {
      nav: {
        about: 'About me',
        projects: 'Projects',
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
    }
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        projects: 'Projets',
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
