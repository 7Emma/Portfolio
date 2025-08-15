import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "accueil", label: "Accueil", href: "/" },
    { id: "a-propos", label: "À propos", href: "/about" },
    { id: "projets", label: "Projets", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      icon: Github,
      url: "https://github.com/emmaagbo",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: Twitter,
      url: "https://www.twitter.com/EAgbotoedo",
    },
    {
      id: "email",
      label: "Email",
      icon: Mail,
      url: "mailto:mahoukpegoemmanuel@gmail.com",
    },
  ];

  const services = [
    "Développement Front-end",
    "Développement Back-end",
    "UX/UI Design",
    "Responsive Design",
  ];

  return (
    <footer className="relative bg-slate-950 text-gray-400 overflow-hidden">
      {/* Halo en haut */}

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Colonne 1 : Logo & social */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            ManuTech
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Développeur web passionné par la création d’expériences numériques
            fluides et impactantes.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-700 hover:border-purple-400 transition-colors duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/20"
                aria-label={link.label}
              >
                <link.icon
                  className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
                  size={20}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="group relative text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Services */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Services</h3>
          <ul className="space-y-3">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer flex items-center"
              >
                <span className="text-pink-400 mr-2">&bull;</span> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 : Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
          <address className="not-italic space-y-3">
            <p className="flex items-center text-gray-400">
              <ExternalLink size={16} className="mr-2 text-purple-400" />
              Porto-Novo, Bénin
            </p>
            <p className="flex items-center">
              <Mail size={16} className="mr-2 text-purple-400" />
              <a
                href="mailto:mahoukpegoemmanuel@gmail.com"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                mahoukpegoemmanuel@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <ExternalLink size={16} className="mr-2 text-purple-400" />
              <a
                href="tel:+2290191732432"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                +229 01 91 73 24 32
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-slate-800 bg-slate-900 py-6 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-gray-400">
          &copy; {currentYear}{" "}
          <span className="text-pink-400 font-semibold">ManuTech</span>. Tous
          droits réservés.
        </p>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-6 text-sm">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 flex items-center"
          >
            Mentions légales <ExternalLink size={14} className="ml-1" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 flex items-center"
          >
            Politique de confidentialité{" "}
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
