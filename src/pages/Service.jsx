import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Cpu,
  Settings,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: <Monitor size={28} />,
    title: "Développement d'applications web",
    description:
      "Sites vitrines, applications SaaS, plateformes e-commerce avec des interfaces utilisateur modernes et réactives.",
    features: ["React/Next.js", "Vue.js/Nuxt", "TypeScript", "API REST"],
    shadowColor: "blue",
    delay: 0,
  },
  {
    icon: <Smartphone size={28} />,
    title: "Développement mobile",
    description:
      "Applications iOS et Android natives ou cross-platform offrant une expérience utilisateur optimale.",
    features: ["React Native", "Flutter", "App Store", "Performance"],
    shadowColor: "green",
    delay: 100,
  },
  {
    icon: <Cpu size={28} />,
    title: "Conseil technique",
    description:
      "Architecture logicielle, choix technologiques, revue de code et stratégie de développement.",
    features: [
      "Architecture",
      "Code Review",
      "Tech Strategy",
      "Best Practices",
    ],
    shadowColor: "purple",
    delay: 200,
  },
  {
    icon: <Settings size={28} />,
    title: "Optimisation de performance",
    description:
      "Audit, refactoring et amélioration des performances des applications existantes.",
    features: [
      "Audit Performance",
      "Refactoring",
      "Monitoring",
      "Optimisation",
    ],
    shadowColor: "orange",
    delay: 300,
  },
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div id="services" className="relative py-20 px-6 bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-bounce shadow-lg shadow-purple-500/25">
            <Settings size={24} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Mes services
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Des solutions techniques innovantes adaptées à vos besoins
            spécifiques
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 transform hover:scale-[1.03] transition-all duration-500 overflow-hidden"
              style={{
                animationDelay: `${service.delay}ms`,
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl opacity-20 animate-pulse`}
                ></div>
              </div>

              {/* Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative z-10">
                {/* Icon Section */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg shadow-${service.shadowColor}-500/25 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center px-3 py-1 bg-${service.shadowColor}-500/10 text-${service.shadowColor}-400 rounded-full text-sm font-medium border border-${service.shadowColor}-500/20 group-hover:bg-${service.shadowColor}-500/20 transition-all duration-300`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    >
                      <Check size={14} className="mr-1" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Approach Section */}
        <div className="relative bg-slate-800/30 backdrop-blur-xl p-12 rounded-3xl border border-slate-700/50 text-center overflow-hidden group hover:border-purple-400/50 transition-all duration-500">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8 shadow-2xl shadow-purple-500/25 group-hover:animate-bounce">
              <Settings size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
              Approche personnalisée
            </h3>

            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Chaque projet est unique et mérite une approche sur mesure. Après
              une analyse approfondie de vos besoins, je vous propose les
              solutions les plus adaptées pour atteindre vos objectifs tout en
              respectant vos contraintes de temps et de budget.
            </p>

            {/* Call to Action */}
            <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <a href="#contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/25">
                Discutons de votre projet
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "50+", label: "Projets réalisés", color: "purple" },
            { number: "98%", label: "Satisfaction client", color: "pink" },
            { number: "3+", label: "Années d'expérience", color: "blue" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div
                className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 group-hover:animate-pulse`}
              >
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
