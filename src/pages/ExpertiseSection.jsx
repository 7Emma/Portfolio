import { Code, Monitor, Database, Cpu, Star } from "lucide-react";

const skills = {
  languages: {
    title: "Langages de programmation",
    icon: <Code size={22} />,
    color: "purple",
    items: ["JavaScript/TypeScript", "Python", "C++", "Swift/Kotlin", "Java"],
  },
  frontend: {
    title: "Frontend",
    icon: <Monitor size={22} />,
    color: "pink",
    items: [
      "React.js",
      "React Native",
      "Vue.js",
      "Angular",
      "HTML5/CSS3/SASS",
      "TailwindCSS",
    ],
  },
  backend: {
    title: "Backend",
    icon: <Database size={22} />,
    color: "blue",
    items: [
      "Node.js",
      "Django/Flask",
      "Laravel",
      "API RESTful",
      "GraphQL",
      "Microservices",
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    icon: <Cpu size={22} />,
    color: "purple",
    items: [
      "Git/GitHub/GitLab",
      "Docker",
      "Kubernetes",
      "AWS/Azure/GCP",
      "CI/CD",
      "Terraform",
    ],
  },
};

const colorMap = {
  purple: "purple-400",
  pink: "pink-400",
  blue: "blue-400",
};

const ExpertiseSection = () => {

  return (
    <section id="expertise" className="py-20 px-6 bg-slate-900 text-gray-200">
      <style>
        {`
        .skill-chip {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-chip::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--chip-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .skill-chip:hover::before {
          opacity: 0.1;
        }

        .skill-chip-hover {
            box-shadow: 0 0 15px var(--chip-color);
        }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-bounce shadow-lg shadow-purple-500/25">
            <Star size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Expertise technique
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Une large palette de technologies maîtrisées pour construire des
            solutions robustes et modernes.
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, category]) => {
            const categoryColor = colorMap[category.color];
            return (
              <div
                key={key}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 transform hover:scale-[1.02] transition-all duration-300 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-400/10"
              >
                {/* Icône de la catégorie */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-full border-2 border-${categoryColor} shadow-lg shadow-${categoryColor}/25 mr-4`}
                  >
                    <div
                      className={`text-${categoryColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Liste des compétences */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, index) => (
                    <span
                      key={index}
                      className={`skill-chip px-4 py-2 bg-slate-900 text-gray-300 rounded-full text-sm border border-${categoryColor} hover:bg-slate-700 transition-colors duration-300`}
                      style={{
                        "--chip-color": `var(--tw-border-opacity, 1) var(--tw-border-color)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
