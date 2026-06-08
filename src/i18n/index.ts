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
