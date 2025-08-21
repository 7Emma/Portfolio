import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import photo from "../assets/photo.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Data Engineer",
    "Designer UI/UX",
    "Créateur d'expériences",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: Code, name: "Développement", color: "text-blue-400" },
    { icon: Palette, name: "Design", color: "text-purple-400" },
    { icon: Zap, name: "Performance", color: "text-yellow-400" },
  ];

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Profile section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 relative group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                <img src={photo} className="w-50" />
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-25 group-hover:opacity-15 transition duration-1000"></div>
          </div>

          {/* Name and title */}
          <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Emmanuel AGBOTOEDO
          </h1>

          {/* Enhanced animated role with better transitions */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <div className="relative">
              <p className="text-xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-700 transform hover:scale-105">
                {roles[currentRole]}
              </p>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform origin-left transition-transform duration-700"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionné par la conception d’expériences numériques remarquables,
            je transforme vos idées en solutions innovantes, alliant créativité
            et expertise technique.
          </p>

          {/* Skills icons */}
          <div className="flex justify-center space-x-8 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group cursor-pointer transition-all duration-300 hover:scale-110 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 group-hover:border-purple-400/50 transition-all duration-300">
                  <skill.icon className={`w-8 h-8 ${skill.color} mb-2`} />
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Voir mes projets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Me contacter
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              {
                icon: Github,
                href: "https://www.github.com/7Emma",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:mahoukpegoemmanuel@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className={`group p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-sm text-gray-400 mb-2">Découvrir</p>
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default Home;
