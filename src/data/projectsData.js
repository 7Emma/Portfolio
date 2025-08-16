// src/data/projectsData.js
import image1 from "../assets/projects-photo/image1.png";
import image2 from "../assets/projects-photo/image2.jpg";
import image3 from "../assets/projects-photo/image3.jpg";
import image4 from "../assets/projects-photo/image4.jpg";
import image5 from "../assets/projects-photo/image5.jpg";
import image6 from "../assets/projects-photo/image6.png";
import image7 from "../assets/projects-photo/image7.png";
import image8 from "../assets/projects-photo/image8.png";


const sites = [
  {
    title: "E-commerce Platform",
    description:
      "Plateforme e-commerce avec panier, paiement sécurisé Stripe et gestion des commandes en temps réel.",
    image: image1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    role: "Développeur Full Stack",
    challenges: "Optimisation des performances et sécurisation des paiements.",
    githubLink: "https://github.com/7Emma/Ola-Chris",
    liveLink: "https://ola-chris-web.netlify.app/",
    featured: true,
  },
  {
    title: "Team OPPAI",
    description:
      "Site portfolio responsive pour présenter l’équipe OPPAI, leur savoir-faire et leur vision.",
    image: image2,
    technologies: ["React", "Tailwind CSS", "Django REST"],
    role: "Développeur Frontend",
    challenges: "Animations fluides et optimisation des images.",
    githubLink: "https://github.com/7Emma/OPPAI",
    liveLink: "https://oppaifc.netlify.app/",
    featured: false,
  },
  {
    title: "Super Hero",
    description:
      "Application de gestion de tâches avec collaboration en temps réel entre utilisateurs.",
    image: image3,
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
    role: "Développeur Full Stack",
    challenges:
      "Synchronisation en temps réel et gestion des conflits d’édition.",
    githubLink: "https://github.com//Emma/Super-hero",
    liveLink: "https://nosheros.netlify.app/",
    featured: true,
  },
  {
    title: "Portfolio V1",
    description:
      "Mon premier portfolio avec React et Tailwind CSS, présentant mes premiers projets.",
    image: image8,
    technologies: ["React", "Tailwind CSS"],
    role: "Développeur Frontend",
    challenges:
      "Création d’un design moderne et responsive en partant de zéro.",
    githubLink: null,
    liveLink: null,
    featured: true,
  },
  {
    title: "Application de gestion de tâches",
    description:
      "Application web pour organiser des tâches avec authentification et base de données.",
    image: image6,
    technologies: ["React", "Node.js", "MongoDB"],
    role: "Développeur Full Stack",
    challenges: "Gestion de l’état global et communication avec l’API.",
    githubLink: null,
    liveLink: null,
    featured: true,
  },
  {
    title: "Landing Page Restaurant",
    description:
      "Page d’atterrissage moderne et performante pour un restaurant fictif.",
    image: image7,
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Développeur Frontend",
    challenges: "Optimisation de la performance et de l’accessibilité.",
    githubLink: null,
    liveLink: null,
    featured: false,
  },
  //{
  //  title: "Blog CMS",
  //  description:
  //    "Système de gestion de contenu pour blog avec éditeur WYSIWYG et API GraphQL.",
  //  image: image4,
  //  technologies: ["Next.js", "GraphQL", "Prisma"],
  //  role: "Développeur Backend",
  //  challenges:
  //    "Mise en place d’une authentification robuste et gestion des permissions.",
  //  githubLink: "https://github.com/7Emma/blog-cms",
  //  liveLink: null,
  //  featured: false,
  //},
  //{
  //  title: "Fitness Tracker",
  //  description:
  //    "Application mobile de suivi de fitness avec graphiques et intégration de capteurs.",
  //  image: image5,
  //  technologies: ["React Native", "TypeScript", "Firebase"],
  //  role: "Développeur Mobile",
  //  challenges: "Synchronisation des données et visualisation des progrès.",
  //  githubLink: "https://github.com/7Emma/fitness-tracker",
  //  liveLink: null,
  //  featured: false,
  //},
  //{
  //  title: "Dashboard Analytics",
  //  description:
  //    "Tableau de bord interactif pour visualiser et analyser des données en temps réel.",
  //  image: image6,
  //  technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
  //  role: "Développeur Full Stack",
  //  challenges:
  //    "Traitement et affichage efficace de grandes quantités de données.",
  //  githubLink: "https://github.com/7Emma/analytics-dashboard",
  //  liveLink: null,
  //  featured: true,
  //},
];

export default sites;
