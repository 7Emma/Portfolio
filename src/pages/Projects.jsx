import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Tag,
  Star,
  Award,
  Briefcase,
  X,
} from "lucide-react";
import sites from "../data/projectsData";

const Projects = () => {
  // État pour gérer le filtre de projets
  const [filter, setFilter] = useState("all");
  // État pour afficher les projets filtrés
  const [visibleProjects, setVisibleProjects] = useState(sites);
  // État pour le projet sélectionné dans la modal
  const [selectedProject, setSelectedProject] = useState(null);
  // État pour l'animation d'apparition
  const [isVisible, setIsVisible] = useState(false);

  // Technologies uniques pour les filtres
  const allTechnologies = [
    ...new Set(sites.flatMap((site) => site.technologies)),
  ];

  // Effet pour l'animation d'apparition de la section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Fonction pour filtrer les projets en fonction du type de filtre
   * @param {string} filterType - Le type de filtre (ex: 'all', 'featured', 'React.js')
   */
  const filterProjects = (filterType) => {
    setFilter(filterType);
    if (filterType === "all") {
      setVisibleProjects(sites);
    } else if (filterType === "featured") {
      setVisibleProjects(sites.filter((site) => site.featured));
    } else {
      setVisibleProjects(
        sites.filter((site) => site.technologies.includes(filterType))
      );
    }
  };

  /**
   * Ouvre la modal des détails d'un projet
   * @param {object} project - L'objet projet à afficher
   */
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Empêche le défilement du corps
  };

  /**
   * Ferme la modal des détails du projet
   */
  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // Réactive le défilement
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white min-h-screen relative overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la section */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block relative mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-bounce shadow-lg shadow-purple-500/25">
            <Briefcase size={24} />
          </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Mes Projets
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Découvrez mon portfolio de projets qui démontre mes compétences en
            développement web et mobile, de la conception à la réalisation.
          </p>

          {/* Filtres de la section */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => filterProjects("all")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "all"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => filterProjects("featured")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "featured"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <Star size={16} />
                Projets vedettes
              </span>
            </button>
            {allTechnologies.slice(0, 5).map((tech, index) => (
              <button
                key={index}
                onClick={() => filterProjects(tech)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === tech
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                    : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform border border-gray-700/50 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${150 * (index % 3)}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end z-20">
                  <div className="p-6 flex justify-between w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      onClick={() => openProjectDetails(project)}
                      className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:scale-105"
                    >
                      Détails
                    </button>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50 transform hover:scale-110"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50 transform hover:scale-110"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-lg animate-pulse">
                    <Star size={12} className="mr-1" />
                    Vedette
                  </div>
                )}
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700/50 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour les détails du projet */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeProjectDetails}
          >
            <div
              className="bg-gray-800/95 backdrop-blur-xl rounded-2xl max-w-5xl w-full max-h-[80vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-t-2xl"></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-6 right-6 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-900 p-3 rounded-full transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 transform hover:scale-110"
                >
                  <X className="text-white" size={24} />
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star size={16} className="mr-2" />
                    Projet vedette
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Détails du projet
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                          <Tag size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            Technologies
                          </h4>
                          <p className="text-white font-medium">
                            {selectedProject.technologies.join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            Mon rôle
                          </h4>
                          <p className="text-white font-medium">
                            {selectedProject.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                          <Award size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            Défis
                          </h4>
                          <p className="text-white font-medium">
                            {selectedProject.challenges}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Fonctionnalités clés
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Interface utilisateur responsive et intuitive",
                        "Performance optimisée pour une expérience fluide",
                        "Architecture robuste et évolutive",
                        "Tests automatisés pour garantir la qualité",
                        "Documentation détaillée pour faciliter la maintenance",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-8 pt-6 border-t border-gray-700/50">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/50 backdrop-blur-sm hover:bg-gray-600/50 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 border border-gray-600/50 hover:border-purple-500/50 transform hover:scale-105 font-semibold"
                  >
                    <Github size={20} />
                    Voir le code
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-2 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 font-semibold"
                    >
                      <ExternalLink size={20} />
                      Voir en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
