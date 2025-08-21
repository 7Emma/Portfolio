import { useState, useEffect } from "react";

const LoadingSpinner = ({
  fullScreen = true,
  color = "purple",
  variant = "matrix", // 'matrix', 'cyber', 'pulse', 'orbit'
  showProgress = false,
  progressValue = 0,
  loadingText = "Chargement Emmanuel",
  showParticles = true,
}) => {
  const [dots, setDots] = useState("");
  const [glitchText, setGlitchText] = useState(loadingText);
  const [particles, setParticles] = useState([]);

  // Animation des points de chargement
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Effet glitch pour le texte
  useEffect(() => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        const randomIndex = Math.floor(Math.random() * loadingText.length);
        const randomChar =
          glitchChars[Math.floor(Math.random() * glitchChars.length)];
        const glitched = loadingText.split("");
        glitched[randomIndex] = randomChar;
        setGlitchText(glitched.join(""));

        setTimeout(() => setGlitchText(loadingText), 50);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [loadingText]);

  // Génération des particules
  useEffect(() => {
    if (!showParticles) return;

    const generateParticles = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 2 + 1,
      }));
    };

    setParticles(generateParticles());
  }, [showParticles]);

  // Couleurs disponibles
  const colorSchemes = {
    green: {
      primary: "text-green-400",
      secondary: "text-green-300",
      glow: "drop-shadow-[0_0_10px_#00FF00]",
      bg: "bg-green-500",
      border: "border-green-400",
      shadow: "0_0_20px_#00FF0080",
      gradient: "from-green-400 to-emerald-500",
    },
    blue: {
      primary: "text-blue-400",
      secondary: "text-blue-300",
      glow: "drop-shadow-[0_0_10px_#0080FF]",
      bg: "bg-blue-500",
      border: "border-blue-400",
      shadow: "0_0_20px_#0080FF80",
      gradient: "from-blue-400 to-cyan-500",
    },
    purple: {
      primary: "text-purple-400",
      secondary: "text-purple-300",
      glow: "drop-shadow-[0_0_10px_#8000FF]",
      bg: "bg-purple-500",
      border: "border-purple-400",
      shadow: "0_0_20px_#8000FF80",
      gradient: "from-purple-400 to-pink-500",
    },
    red: {
      primary: "text-red-400",
      secondary: "text-red-300",
      glow: "drop-shadow-[0_0_10px_#FF0040]",
      bg: "bg-red-500",
      border: "border-red-400",
      shadow: "0_0_20px_#FF004080",
      gradient: "from-red-400 to-orange-500",
    },
    slate: {
      primary: "text-slate-300",
      secondary: "text-slate-400",
      glow: "drop-shadow-[0_0_10px_#64748B]",
      bg: "bg-slate-400",
      border: "border-slate-400",
      shadow: "0_0_20px_#64748B80",
      gradient: "from-slate-400 to-gray-500",
    },
  };

  const colors = colorSchemes[color] || colorSchemes.green;

  // Classe pour le conteneur
  const containerClass = fullScreen
    ? "fixed inset-0 flex justify-center items-center w-full h-full bg-black/95 backdrop-blur-sm z-50"
    : "flex justify-center items-center w-full p-4 bg-black/90 backdrop-blur-sm";

  // Variantes de spinner
  const SpinnerVariants = {
    matrix: () => (
      <div className="relative right-20">
        {/* Effet de lueur externe animée */}
        <div
          className={`absolute inset-0 blur-xl ${colors.bg} bg-opacity-30 rounded-full animate-pulse`}
          style={{
            boxShadow: colors.shadow,
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        ></div>

        {/* Spinner principal avec effet néon */}
        <svg
          aria-hidden="true"
          className={`relative w-12 h-12 animate-spin ${colors.primary} ${colors.glow} fill-current`}
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
            className="opacity-20"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>

        {/* Cercles orbitaux */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "3s", animationDirection: "reverse" }}
        >
          <div
            className={`absolute top-0 left-1/2 w-2 h-2 ${colors.bg} rounded-full transform -translate-x-1/2`}
          ></div>
          <div
            className={`absolute bottom-0 left-1/2 w-1 h-1 ${colors.bg} rounded-full transform -translate-x-1/2 opacity-60`}
          ></div>
          <div
            className={`absolute left-0 top-1/2 w-1.5 h-1.5 ${colors.bg} rounded-full transform -translate-y-1/2 opacity-80`}
          ></div>
          <div
            className={`absolute right-0 top-1/2 w-1 h-1 ${colors.bg} rounded-full transform -translate-y-1/2 opacity-40`}
          ></div>
        </div>
      </div>
    ),

    cyber: () => (
      <div className="relative">
        {/* Hexagone externe rotatif */}
        <div
          className={`absolute inset-0 ${colors.border} border-2 opacity-20`}
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            animation: "spin 4s linear infinite",
          }}
        ></div>

        {/* Spinner central */}
        <div
          className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 ${colors.border} border-t-transparent animate-spin`}
        >
          <div
            className={`absolute inset-2 rounded-full border-2 ${colors.border} border-b-transparent animate-spin`}
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div
            className={`absolute inset-4 rounded-full border ${colors.border} border-r-transparent animate-spin`}
            style={{ animationDuration: "0.8s" }}
          ></div>
        </div>

        {/* Points lumineux */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${colors.bg} rounded-full animate-ping`}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${
                i * 90
              }deg) translateY(-40px)`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    ),

    pulse: () => (
      <div className="relative">
        {/* Cercles concentriques avec effet pulse */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full ${colors.border} border-2 opacity-30`}
            style={{
              animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: `scale(${1 + i * 0.2})`,
            }}
          ></div>
        ))}

        {/* Noyau central */}
        <div
          className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${colors.gradient} animate-pulse flex items-center justify-center`}
        >
          <div
            className={`w-4 h-4 sm:w-6 sm:h-6 ${colors.bg} rounded-full animate-ping`}
          ></div>
        </div>
      </div>
    ),

    orbit: () => (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
        {/* Orbites */}
        {[0, 1, 2].map((orbit) => (
          <div
            key={orbit}
            className={`absolute inset-0 rounded-full border ${colors.border} opacity-20`}
            style={{
              animation: `spin ${2 + orbit}s linear infinite`,
              transform: `scale(${0.6 + orbit * 0.2})`,
            }}
          >
            {/* Planètes orbitales */}
            <div
              className={`absolute top-0 left-1/2 w-2 h-2 ${colors.bg} rounded-full transform -translate-x-1/2 ${colors.glow}`}
              style={{ animationDelay: `${orbit * 0.3}s` }}
            ></div>
          </div>
        ))}

        {/* Soleil central */}
        <div
          className={`absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 ${colors.bg} rounded-full transform -translate-x-1/2 -translate-y-1/2 ${colors.glow} animate-pulse`}
        ></div>
      </div>
    ),
  };

  return (
    <div className={containerClass}>
      {/* Particules flottantes */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute w-1 h-1 ${colors.bg} rounded-full opacity-20 animate-pulse`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.id * 0.2}s`,
                animationDuration: `${particle.speed}s`,
                transform: `scale(${particle.size * 0.5})`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative flex flex-col items-center">
        {/* Spinner principal */}
        <div className="mb-8">{SpinnerVariants[variant]()}</div>

        {/* Barre de progression optionnelle */}
        {showProgress && (
          <div className="w-48 sm:w-64 md:w-72 mb-4">
            <div
              className={`w-full bg-gray-800 rounded-full h-2 ${colors.border} border border-opacity-30`}
            >
              <div
                className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-500 ease-out ${colors.glow}`}
                style={{
                  width: `${Math.max(0, Math.min(100, progressValue))}%`,
                }}
              ></div>
            </div>
            <div
              className={`text-center mt-2 text-sm ${colors.secondary} font-mono`}
            >
              {Math.round(progressValue)}%
            </div>
          </div>
        )}

        {/* Texte de chargement avec effet glitch */}
        <div className="text-center">
          <span
            className={`text-sm sm:text-base md:text-lg ${colors.primary} font-medium ${colors.glow} font-mono tracking-wider`}
          >
            {glitchText}
            {dots}
          </span>

          {/* Ligne de scan */}
          <div className="relative mt-2 overflow-hidden">
            <div
              className={`w-32 sm:w-40 h-px bg-gradient-to-r ${colors.gradient} mx-auto`}
            ></div>
            <div
              className={`absolute top-0 w-8 h-px bg-white opacity-80 animate-pulse`}
              style={{
                animation: "scan 2s ease-in-out infinite",
                background: `linear-gradient(90deg, transparent, ${colors.primary
                  .replace("text-", "#")
                  .replace("-400", "80")}, transparent)`,
              }}
            ></div>
          </div>
        </div>

        {/* Indicateurs de statut */}
        <div className="flex space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 ${colors.bg} rounded-full animate-pulse opacity-60`}
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* CSS personnalisé injecté */}
      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
