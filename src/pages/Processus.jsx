import {
  Globe,
  Book,
  Terminal,
  Zap,
  Send,
  Award,
  Code,
  Settings,
} from "lucide-react";
import { useState } from "react";


const processSteps = [
  {
    title: "Découverte",
    desc: "Analyse approfondie de vos besoins, objectifs et contraintes",
    icon: <Globe size={24} />,
    color: "purple",
  },
  {
    title: "Planification",
    desc: "Élaboration d'une stratégie technique et d'un calendrier précis",
    icon: <Book size={24} />,
    color: "pink",
  },
  {
    title: "Développement",
    desc: "Création itérative avec des cycles de feedback réguliers",
    icon: <Terminal size={24} />,
    color: "blue",
  },
  {
    title: "Validation",
    desc: "Tests rigoureux pour garantir qualité, sécurité et performances",
    icon: <Zap size={24} />,
    color: "purple",
  },
  {
    title: "Déploiement",
    desc: "Mise en production et transfert de compétences",
    icon: <Send size={24} />,
    color: "pink",
  },
];

const methodologyItems = [
  {
    name: "Agile/Scrum",
    desc: "Développement itératif",
    icon: <Zap size={20} />,
    color: "purple",
  },
  {
    name: "Git Flow",
    desc: "Versioning & collaboration",
    icon: <Code size={20} />,
    color: "pink",
  },
  {
    name: "CI/CD",
    desc: "Intégration continue",
    icon: <Settings size={20} />,
    color: "blue",
  },
  {
    name: "Testing",
    desc: "Qualité garantie",
    icon: <Award size={20} />,
    color: "purple",
  },
];

const colorMap = {
  purple: "purple-400",
  pink: "pink-400",
  blue: "blue-400",
};


const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 bg-slate-900 text-gray-200">
      <style>
        {`
          .timeline-line {
            background-image: linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to));
          }
          
          @keyframes border-pulse {
            0% { border-color: rgba(192, 38, 211, 0.5); }
            50% { border-color: rgba(192, 38, 211, 1); }
            100% { border-color: rgba(192, 38, 211, 0.5); }
          }
          
          .timeline-node-pulse {
            animation: border-pulse 2s infinite ease-in-out;
          }

          @keyframes line-glow {
            from {
              opacity: 0.2;
            }
            to {
              opacity: 0.8;
            }
          }

          .line-glow-animation {
            animation: line-glow 1s ease-in-out infinite alternate;
          }
        `}
      </style>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-bounce shadow-lg shadow-purple-500/25">
            <Code size={24} />
          </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Mon processus de développement
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Une méthodologie éprouvée qui garantit la réussite de votre projet, de
          la conception à la livraison.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto md:space-y-12">
        {/* La ligne de la timeline, maintenant sur le côté pour un design plus clair sur mobile */}
        <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/50 via-pink-400/50 to-blue-400/50"></div>
        <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-0 line-glow-animation"></div>

        {processSteps.map((step, index) => {
          const stepColor = colorMap[step.color];
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-start md:items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              } md:space-x-8`}
            >
              {/* Le noeud de la timeline */}
              <div
                className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-4 shadow-xl z-10 
                  ${
                    isLeft
                      ? "md:absolute md:left-1/2 md:-translate-x-1/2"
                      : "md:absolute md:left-1/2 md:-translate-x-1/2"
                  }
                  bg-slate-900 border-${stepColor} shadow-${stepColor}/50 transition-transform duration-300 hover:scale-125 timeline-node-pulse`}
              >
                <div className={`text-${stepColor}`}>{step.icon}</div>
              </div>

              {/* Contenu de la carte */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-xl border border-slate-700 backdrop-blur-sm bg-slate-800/50
                  transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${stepColor}/10
                  ${
                    isLeft ? "pl-16 md:pl-0 md:pr-16" : "pl-16 md:pl-16 md:pr-0"
                  }`}
              >
                <h3 className="text-xl font-bold text-white mb-2 ">
                  <span className={`inline-block mr-2 text-${stepColor}`}>
                    {index + 1}.
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>

              {/* Espace vide pour l'alignement sur desktop */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          );
        })}
      </div>

      {/* Méthodologies & Outils */}
      <div className="mt-20 py-12 px-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl border-2 border-purple-400/50 shadow-2xl shadow-purple-500/20">
        <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Méthodologies & Outils
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {methodologyItems.map((method, i) => (
            <div
              key={i}
              className="text-center space-y-3 p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50"
            >
              <div className="flex justify-center mb-3">
                <div
                  className={`w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border-2 border-${method.color}-400/50 transition-transform duration-300 hover:scale-110 shadow-lg shadow-${method.color}-400/20`}
                >
                  <div className={`text-${method.color}-400`}>
                    {method.icon}
                  </div>
                </div>
              </div>
              <h4 className="text-white font-semibold">{method.name}</h4>
              <p className="text-gray-400 text-sm">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
