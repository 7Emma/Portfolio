import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  Star,
  Settings,
  MessageCircle,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Effet de scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Pour determiner la section active
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  // Navigation items avec icônes
  const navItems = [
    { href: "#home", label: "Accueil", icon: Home },
    { href: "#about", label: "À propos", icon: User },
    { href: "#expertise", label: "Compétences", icon: Star },
    { href: "#services", label: "Services", icon: Settings },
    { href: "#process", label: "Processus", icon: Code },
    { href: "#projects", label: "Projets", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: MessageCircle },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    setActiveSection(href.substring(1));

    // Smooth scroll vers la section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group relative flex items-center space-x-3 px-3 py-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-xl"
            aria-label="ManuTech - Accueil"
          >
            {/* Logo avec animation */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                M
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-md transition-all duration-300"></div>
            </div>

            {/* Texte */}
            <div className="hidden sm:block">
              <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ManuTech
              </p>
              <p className="text-xs text-gray-400 -mt-1">Web Developer</p>
            </div>

            {/* Effets animés 
            <span className="absolute inset-0 animate-gradient-slow rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 opacity-20 animate-gradient-slow pointer-events-none"></span>*/}
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                }`}
              >
                <item.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                <span className="font-medium">{item.label}</span>

                {/* Indicateur actif */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="group relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Collaborons</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </div>

          {/* Bouton mobile amélioré */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:bg-purple-500/10 rounded-lg group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec animations */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`group flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] transform ${
                  activeSection === item.href.substring(1)
                    ? "text-purple-400 bg-purple-500/10 border border-purple-500/20"
                    : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                } ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                <span className="font-medium">{item.label}</span>

                {/* Indicateur mobile */}
                <div
                  className={`ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                ></div>
              </a>
            ))}

            {/* CTA mobile */}
            <div
              className={`pt-4 border-t border-purple-500/20 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="group relative flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="relative z-10">Collaborons ensemble</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
