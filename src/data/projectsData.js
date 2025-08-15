// src/data/projectsData.js
import image1 from '../assets/projects-photo/image1.png'
import image2 from '../assets/projects-photo/image2.jpg'
import image3 from '../assets/projects-photo/image3.jpg'
import image4 from '../assets/projects-photo/image4.jpg'
import image5 from '../assets/projects-photo/image5.jpg'
import image6 from '../assets/projects-photo/image6.svg'


const sites = [
  {
    title: "E-commerce Platform",
    description: "Plateforme de commerce électronique complète avec panier, paiement et gestion des commandes.",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    role: "Développeur Full Stack",
    challenges: "Optimisation des performances et sécurisation des paiements",
    githubLink: "https://github.com/emmanuel/ecommerce",
    liveLink: "https://ecommerce-project.com",
    featured: true
  },
  {
    title: "Portfolio Photography",
    description: "Site portfolio responsive pour photographe professionnel avec galerie dynamique.",
    image: image2,
    technologies: ["Vue.js", "Tailwind CSS", "Firebase"],
    role: "Développeur Frontend",
    challenges: "Animation fluide et optimisation des images",
    githubLink: "https://github.com/emmanuel/photo-portfolio",
    liveLink: "https://photo-portfolio.com",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches avec fonctionnalités de collaboration en temps réel.",
    image: image3,
    technologies: ["React", "Redux", "Express", "Socket.io"],
    role: "Lead Developer",
    challenges: "Synchronisation en temps réel entre utilisateurs",
    githubLink: "https://github.com/emmanuel/task-app",
    liveLink: "https://task-management-app.com",
    featured: true
  },
  {
    title: "Blog CMS",
    description: "Système de gestion de contenu personnalisé pour blog avec éditeur WYSIWYG.",
    image: image4,
    technologies: ["Next.js", "GraphQL", "Prisma"],
    role: "Développeur Backend",
    challenges: "Création d'un système d'authentification robuste",
    githubLink: "https://github.com/emmanuel/blog-cms",
    liveLink: "#",
    featured: false
  },
  {
    title: "Fitness Tracker",
    description: "Application mobile de suivi de fitness avec visualisation des progrès.",
    image: image5,
    technologies: ["React Native", "TypeScript", "Firebase"],
    role: "Développeur Mobile",
    challenges: "Intégration de capteurs et graphiques de progression",
    githubLink: "https://github.com/emmanuel/fitness-tracker",
    liveLink: "https://fitness-tracker-app.com",
    featured: false
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord d'analyse de données pour entreprise avec visualisations interactives.",
    image: image6,
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    role: "Développeur Full Stack",
    challenges: "Traitement de grandes quantités de données en temps réel",
    githubLink: "https://github.com/emmanuel/analytics-dashboard",
    liveLink: "https://analytics-dashboard.com",
    featured: true
  },
  {
    title: "Portfolio V1",
    description:
      "Mon portfolio précédent, construit avec React et Tailwind CSS. Un projet de démonstration de mes compétences frontend.",
    image: "https://placehold.co/600x400/1e293b/d1d5db?text=Projet+Portfolio",
    technologies: ["React.js", "TailwindCSS"],
    githubLink: "#",
    liveLink: "#",
    featured: true,
    role: "Développeur Frontend",
    challenges:
      "Création d'un design moderne et responsive en partant de zéro.",
  },
  {
    title: "Application de gestion de tâches",
    description:
      "Une application web complète pour organiser les tâches, avec authentification et base de données.",
    image: "https://placehold.co/600x400/1e293b/d1d5db?text=Projet+Todo+App",
    technologies: ["React.js", "Node.js", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
    featured: true,
    role: "Développeur Full Stack",
    challenges:
      "Gestion de l'état de l'application et des interactions avec l'API.",
  },
  {
    title: "Clone de Twitter",
    description:
      "Un clone simplifié de Twitter (X) pour m'entraîner sur la gestion des flux de données en temps réel.",
    image:
      "https://placehold.co/600x400/1e293b/d1d5db?text=Projet+Twitter+Clone",
    technologies: ["Vue.js", "Firebase"],
    githubLink: "#",
    liveLink: "#",
    featured: false,
    role: "Développeur Full Stack",
    challenges:
      "Mise en place des fonctionnalités d'authentification et de publication en temps réel.",
  },
  {
    title: "Landing Page pour une agence",
    description:
      "Création d'une page d'atterrissage élégante et performante pour une agence fictive.",
    image:
      "https://placehold.co/600x400/1e293b/d1d5db?text=Projet+Landing+Page",
    technologies: ["HTML5/CSS3", "JavaScript"],
    githubLink: "#",
    liveLink: "#",
    featured: false,
    role: "Développeur Frontend",
    challenges:
      "Optimisation des performances et de l'accessibilité du site web.",
  },
];

export default sites;