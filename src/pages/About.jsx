import { useState, useEffect } from "react";
import HeroSection from "../components/about/HeroSection";
import {
  Code,
  Award,
  Layers,
  Monitor,
  Smartphone,
  Cpu,
  Database,
  Settings,
  Globe,
  Book,
  Zap,
  Send,
  Terminal,
  FileDown,
  Briefcase,
  User,
  Calendar,
  GraduationCap,
  Building,
} from "lucide-react";

const theme = {
  primary: "text-purple-400",
  secondary: "text-pink-400",
  accent: "text-blue-400",
  primaryBg: "bg-purple-400",
  secondaryBg: "bg-pink-400",
  primaryBorder: "border-purple-400",
  darkBg: "bg-slate-900",
  darkBgAlt: "bg-slate-800",
  darkText: "text-gray-200",
};


const philosophyPillars = [
  {
    icon: <Award size={24} />,
    title: "Performance",
    description:
      "Des applications rapides, réactives et optimisées pour tous les utilisateurs et appareils.",
    color: "purple",
  },
  {
    icon: <Layers size={24} />,
    title: "Évolutivité",
    description:
      "Des solutions modulaires conçues pour s'adapter à votre croissance et à l'évolution de vos besoins.",
    color: "pink",
  },
  {
    icon: <Settings size={24} />,
    title: "Maintenabilité",
    description:
      "Un code propre, documenté et testé pour faciliter les évolutions futures et réduire la dette technique.",
    color: "blue",
  },
];

const experienceItems = [
  {
    title: "Développeur Frontend",
    company: "AsiTech",
    period: "2023 - Présent",
    description:
      "Développement d'interfaces utilisateur réactives avec React et optimisation des performances.",
  },
  {
    title: "Développeur Web Junior",
    company: "WebSolutions",
    period: "2022 - 2023",
    description:
      "Création de sites web responsives et intégration de systèmes de gestion de contenu.",
  },
  {
    title: "Stage en développement",
    company: "EcoDev",
    period: "2021 - 2022",
    description:
      "Participation à des projets d'équipe et apprentissage des méthodologies agiles.",
  },
];

const educationItems = [
  {
    degree: "Master en Développement Web",
    institution: "École Supérieure du Numérique",
    year: "2022",
    description:
      "Spécialisation en technologies web modernes et développement full-stack.",
  },
  {
    degree: "Licence en Informatique",
    institution: "Université Tech",
    year: "2020",
    description:
      "Fondamentaux de la programmation, algorithmes et structures de données.",
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("philosophy");
  const [isVisible, setIsVisible] = useState({});

  // Hook pour animer les éléments au défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.85;

        if (isInView) {
          setIsVisible((prev) => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérification initiale au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Composant pour les onglets de navigation
  const NavigationTabs = () => (
    <div className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-5xl mx-auto">
        <div className="flex overflow-x-auto no-scrollbar">
          {[
            { id: "philosophy", label: "Philosophie" },
            { id: "resume", label: "CV & Parcours" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-purple-400 border-purple-400"
                  : "text-gray-400 border-transparent hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Composant pour la section "Philosophie"
  const PhilosophySection = () => (
    <div
      id="philosophy"
      className={`animate-on-scroll transform transition-all duration-700 ${
        activeTab === "philosophy"
          ? "opacity-100 translate-y-0"
          : "hidden opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Ma philosophie
      </h2>
      <p className="text-gray-300 text-lg mb-8 max-w-3xl">
        Je crois fermement que le code de qualité est un investissement, pas une
        dépense. Mon approche du développement repose sur trois piliers
        essentiels qui guident chacun de mes projets depuis la conception
        jusqu'à la livraison.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {philosophyPillars.map((pillar, index) => (
          <div
            key={index}
            className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Effet de bordure animée au survol */}
            <div
              className="absolute inset-0 group-hover:animate-border-spin rounded-xl"
              style={{
                background: `conic-gradient(from var(--border-angle) at 50% 50%, #4c1d95, #c026d3, #db2777, #f97316)`,
                "--border-angle": "0deg",
              }}
            ></div>
            <div className="relative z-10 bg-slate-900 p-6 rounded-lg">
              <div
                className={`mb-4 inline-flex p-3 rounded-full border-2 ${
                  pillar.color === "purple"
                    ? "border-purple-400"
                    : pillar.color === "pink"
                    ? "border-pink-400"
                    : "border-blue-400"
                } shadow-lg ${
                  pillar.color === "purple"
                    ? "shadow-purple-400/25"
                    : pillar.color === "pink"
                    ? "shadow-pink-400/25"
                    : "shadow-blue-400/25"
                }`}
              >
                <div
                  className={`${
                    pillar.color === "purple"
                      ? "text-purple-400"
                      : pillar.color === "pink"
                      ? "text-pink-400"
                      : "text-blue-400"
                  }`}
                >
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-400">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Composant pour la section "CV & Parcours" avec une timeline
  const ResumeSection = () => (
    <div
      id="resume"
      className={`animate-on-scroll transform transition-all duration-700 ${
        activeTab === "resume"
          ? "opacity-100 translate-y-0"
          : "hidden opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        CV & Parcours
      </h2>

      {/* Timeline pour l'expérience professionnelle */}
      <div className="mb-12 relative pl-8 border-l-2 border-purple-500/20">
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-purple-400 -translate-x-12">
          <Briefcase
            size={24}
            className="mr-3 p-1 rounded-full bg-slate-900 border border-purple-400"
          />
          Expérience professionnelle
        </h3>
        {experienceItems.map((item, index) => (
          <div key={index} className="mb-8 pl-8 relative group">
            {/* Dot sur la timeline */}
            <div className="absolute -left-[18px] top-0 w-8 h-8 flex items-center justify-center bg-slate-900 rounded-full border-2 border-purple-400/50 group-hover:border-purple-400 transition-all duration-300">
              <span className="block w-2 h-2 rounded-full bg-purple-400/50 group-hover:bg-purple-400 transition-all duration-300"></span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/10">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>
                <span className="flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {item.period}
                </span>
              </div>
              <div className="flex items-center mb-3 text-gray-300">
                <Building size={16} className="mr-2" />
                {item.company}
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline pour la formation */}
      <div className="relative pl-8 border-l-2 border-pink-500/20 mt-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-pink-400 -translate-x-12">
          <GraduationCap
            size={24}
            className="mr-3 p-1 rounded-full bg-slate-900 border border-pink-400"
          />
          Formation
        </h3>
        {educationItems.map((item, index) => (
          <div key={index} className="mb-8 pl-8 relative group">
            {/* Dot sur la timeline */}
            <div className="absolute -left-[18px] top-0 w-8 h-8 flex items-center justify-center bg-slate-900 rounded-full border-2 border-pink-400/50 group-hover:border-pink-400 transition-all duration-300">
              <span className="block w-2 h-2 rounded-full bg-pink-400/50 group-hover:bg-pink-400 transition-all duration-300"></span>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-400/10">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  {item.degree}
                </h4>
                <span className="text-gray-400 text-sm">{item.year}</span>
              </div>
              <div className="flex items-center mb-3 text-gray-300">
                <Building size={16} className="mr-2" />
                {item.institution}
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Composant pour l'appel à l'action
  const CallToAction = () => (
    <div
      className="mt-16 py-10 px-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-xl text-center border-2 border-purple-400/50 animate-on-scroll transform hover:scale-[1.01] transition-all duration-500 shadow-2xl shadow-purple-500/20"
      id="cta-section"
    >
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Travaillons ensemble
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Vous avez un projet qui nécessite une expertise technique avancée ?
          Discutons de la façon dont je peux vous aider à transformer votre
          vision en réalité.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-lg">
            <span className="relative z-10 flex items-center">
              <Send size={20} className="mr-2" />
              Me contacter
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 font-medium rounded-lg hover:bg-purple-400/10 transition-all duration-300 text-lg">
            <FileDown size={20} className="mr-2" />
            Télécharger mon CV
          </button>
        </div>
      </div>
    </div>
  );

  // Le rendu principal qui compose la page
  return (
    <div
      id="about"
      className="min-h-screen bg-slate-900 text-gray-200 font-sans relative overflow-hidden"
    >
      <style>
        {`
        @keyframes border-spin {
          0% { --border-angle: 0deg; }
          100% { --border-angle: 360deg; }
        }
        [data-hover="true"] > div {
          animation: border-spin 4s linear infinite;
        }
        
        @keyframes pulse-gradient {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
        }
        .bg-gradient-pulse {
            animation: pulse-gradient 6s infinite ease-in-out;
        }
        
        .bg-grid-white {
            background-size: 32px 32px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        .bg-dots-white {
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 32px 32px;
        }

        `}
      </style>

      <div className="relative z-10">
        <HeroSection />
        <NavigationTabs />
        <div className="max-w-5xl mx-auto py-12 px-6">
          <PhilosophySection />
          <ResumeSection />
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

export default About;
