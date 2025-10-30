import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  ArrowUp,
  Heart,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Détection du scroll pour afficher le bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { id: "accueil", label: "Accueil", href: "#home" },
    { id: "a-propos", label: "À propos", href: "#about" },
    { id: "projets", label: "Projets", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      icon: Github,
      url: "https://github.com/7Emma",
      color: "hover:text-gray-400",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mahoukpego",
      color: "hover:text-blue-400",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: Twitter,
      url: "https://www.twitter.com/EAgbotoedo",
      color: "hover:text-sky-400",
    },
    {
      id: "email",
      label: "Email",
      icon: Mail,
      url: "mailto:mahoukpegoemmanuel@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const services = [
    "Développement Front-end",
    "Développement Back-end",
    "UX/UI Design",
    "Responsive Design",
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-gray-400 overflow-hidden"
    >
      {/* Éléments d'arrière-plan animés */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Ligne décorative en haut */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1 : Logo & Description */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                ManuTech
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>

            <p className="mb-8 leading-relaxed text-gray-300">
              Développeur web passionné par la création d'expériences numériques
              <span className="text-purple-400 font-semibold"> fluides</span> et
              <span className="text-pink-400 font-semibold"> impactantes</span>.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${link.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {link.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.id} style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={link.href}
                    className="group relative inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse delay-500"></div>
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="group text-gray-400 hover:text-pink-400 transition-all duration-300 cursor-pointer flex items-center hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:font-medium transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse delay-1000"></div>
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="group flex items-start text-gray-400 hover:text-blue-400 transition-all duration-300">
                <MapPin
                  size={18}
                  className="mr-3 mt-0.5 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span>Porto-Novo, Bénin</span>
              </div>

              <div className="group flex items-start">
                <Mail
                  size={18}
                  className="mr-3 mt-0.5 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                />
                <a
                  href="mailto:mahoukpegoemmanuel@gmail.com"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 break-all group-hover:underline"
                >
                  mahoukpegoemmanuel@gmail.com
                </a>
              </div>

              <div className="group flex items-start">
                <Phone
                  size={18}
                  className="mr-3 mt-0.5 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                />
                <a
                  href="tel:+2290191732432"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 group-hover:underline"
                >
                  +229 01 91 73 24 32
                </a>
              </div>
            </address>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Discutons ensemble</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="relative border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 flex items-center">
              &copy; {currentYear}{" "}
              <span className="mx-2 text-pink-400 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                ManuTech
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Fait avec{" "}
                <Heart
                  className="w-4 h-4 mx-1 text-red-400 animate-pulse"
                  fill="currentColor"
                />
                au Bénin
              </span>
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center hover:translate-x-1"
              >
                Mentions légales
                <ExternalLink
                  size={14}
                  className="ml-1 group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
              <a
                href="#"
                className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center hover:translate-x-1"
              >
                Confidentialité
                <ExternalLink
                  size={14}
                  className="ml-1 group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

export default Footer;
