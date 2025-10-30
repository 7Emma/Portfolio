import { FileDown } from "lucide-react";
import photo from "../../assets/emmanuel-agbotoedo.png";

const HeroSection = () => {
  const profileImageUrl = photo;
  const cvDownloadUrl = "//Cv-Emmanuel-AGBOTOEDO.pdf";

  return (
    <div className="relative overflow-hidden py-20 lg:py-32 bg-slate-900">
      {/* Background futuriste avec des motifs animés */}
      <div className="absolute inset-0 bg-slate-900/90 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]">
        <div className="absolute inset-x-0 bottom-0 top-1/2 h-[calc(100%-1.25rem)] bg-gradient-to-t from-black via-transparent to-black opacity-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="absolute inset-0 bg-dots-white/[0.05]"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Colonne de la photo de profil */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative p-1.5 rounded-full shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-transform duration-300">
            {/* Effet de bordure lumineuse animée */}
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-75 blur-lg animate-blob-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-900/50">
              <img
                src={profileImageUrl}
                alt="Emmanuel Mahoukpego"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/3B0764/9333ea?text=Photo+non+disponible";
                }}
              />
            </div>
          </div>
        </div>

        {/* Colonne du contenu textuel */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            À PROPOS
          </h1>
          <p className="text-xl py-4 font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Développeur Web & Data Engineer
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-10">
            Passionné par la création d’applications web et mobiles
            performantes, innovantes et intuitives. Depuis plus de 3 ans, je
            transforme des idées complexes en solutions techniques élégantes, en
            combinant créativité, logique et performance.
            <br />
            <br /> J’aime relever des défis techniques, optimiser les
            performances et concevoir des expériences utilisateur fluides et
            mémorables. Toujours curieux et avide de nouvelles technologies, je
            cherche constamment à enrichir mes compétences pour offrir des
            projets modernes, efficaces et impactants.
            <br />
            <br /> Pour moi, chaque projet est une aventure :{" "}
            <span className="font-semibold">
              apporter des solutions concrètes, simplifier la complexité et
              créer un produit qui fait la différence.
            </span>
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href={cvDownloadUrl}
              download="CV-Emmanuel-AGBOTOEDO-M.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center">
                <FileDown size={20} className="mr-2" />
                Télécharger CV
              </span>
              {/* Effet de transition pour le bouton */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
