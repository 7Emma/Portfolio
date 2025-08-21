import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  User,
  AtSign,
  MessageCircle,
  GitFork,
} from "lucide-react";

const Contact = () => {
  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  // État pour gérer les erreurs de validation
  const [errors, setErrors] = useState({});
  // État pour le statut d'envoi du formulaire
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  // État pour gérer le focus sur les champs du formulaire
  const [focused, setFocused] = useState(null);

  const EMAILJS_SERVICE_ID = "";
  const EMAILJS_TEMPLATE_ID = "";
  const EMAILJS_PUBLIC_KEY = "";

  /**
   * Valide les champs du formulaire avant l'envoi.
   * @returns {boolean} - true si le formulaire est valide, sinon false.
   */
  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Veuillez saisir votre nom";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Veuillez saisir votre email";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Veuillez saisir un email valide";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Veuillez saisir votre message";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Votre message doit contenir au moins 10 caractères";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /**
   * Met à jour l'état du formulaire lors de la saisie.
   * @param {object} e - L'événement de changement de l'input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Supprime l'erreur du champ lors de la saisie
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  /**
   * Réinitialise le formulaire à son état initial.
   */
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  /**
   * Gère l'envoi du formulaire.
   * @param {object} e - L'événement de soumission du formulaire.
   */
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        // Préparation des paramètres pour EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "mahoukpegoemmanuel@gmail.com", // Votre email de destination
          subject: formData.subject || "Nouveau message de contact",
          message: formData.message,
        };

        // Envoi de l'email via EmailJS
        // Note: Cette fonction sera simulée si les clés sont vides
        if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
          // L'envoi réel avec emailjs se ferait ici en production.
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
          );
          console.log("EmailJS keys are defined. Simulated sending...");
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } else {
          console.warn(
            "EmailJS keys are missing. Form submission is simulated."
          );
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        setIsSubmitted(true);

        // Réinitialise le formulaire après 15 secondes pour permettre un nouvel envoi
        setTimeout(() => {
          resetForm();
        }, 15000);
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmitError(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 py-20 px-4 transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center ">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-bounce shadow-lg shadow-purple-500/25">
            <Mail size={24} />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Contactez-moi
        </h2>
        <p className="text-center text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
          Pour toute question, opportunité de collaboration ou simplement pour
          dire bonjour, n'hésitez pas à me contacter. Je vous répondrai dans les
          plus brefs délais.
        </p>

        {/* Conteneur principal avec les informations de contact et le formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Bloc d'informations de contact */}
          <div className="flex flex-col justify-center text-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Informations de contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-full border border-pink-400 shadow-lg shadow-pink-400/25">
                  <Mail size={20} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">mahoukpegoemmanuel@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-full border border-purple-400 shadow-lg shadow-purple-400/25">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p className="font-semibold">+229 01 91 73 24 32</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-400">
              <span className="font-semibold text-white">Basé au Bénin,</span>{" "}
              je suis disponible pour des collaborations locales ou à distance.
            </p>
          </div>

          {/* Bloc du formulaire */}
          {isSubmitted ? (
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-pink-400 shadow-2xl transition-all duration-500 transform scale-105 flex flex-col items-center justify-center text-center">
              <CheckCircle
                size={64}
                className="text-pink-400 mb-4 animate-bounce"
              />
              <h2 className="text-2xl font-bold text-white mb-2">
                Message envoyé avec succès !
              </h2>
              <p className="text-gray-400 mb-6">
                Merci de m'avoir contacté. Je vous répondrai dès que possible.
              </p>
              <button
                onClick={resetForm}
                className="bg-pink-500 hover:bg-pink-600 text-gray-900 font-semibold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 transform hover:scale-105"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-2xl transition-all duration-300"
            >
              {submitError && (
                <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg mb-6 flex items-center">
                  <AlertTriangle size={20} className="mr-3" />
                  <p>{submitError}</p>
                </div>
              )}

              {/* Champ Nom */}
              <div className="relative mb-6">
                <label
                  htmlFor="name"
                  className={`absolute left-4 -top-5 px-2 text-sm font-semibold transition-all duration-300 ${
                    focused === "name" || formData.name
                      ? "text-pink-400"
                      : "text-gray-400"
                  } ${
                    focused === "name" || formData.name ? "bg-slate-800" : ""
                  }`}
                >
                  Nom
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      errors.name
                        ? "text-red-500"
                        : focused === "name"
                        ? "text-pink-400"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className={`w-full px-12 py-3 bg-slate-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-white transition-all duration-300 ${
                      errors.name
                        ? "border-red-500"
                        : focused === "name"
                        ? "border-pink-400"
                        : "border-slate-700"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Champ Email */}
              <div className="relative mb-6">
                <label
                  htmlFor="email"
                  className={`absolute left-4 -top-5 px-1 text-sm font-semibold transition-all duration-300 ${
                    focused === "email" || formData.email
                      ? "text-pink-400"
                      : "text-gray-400"
                  } ${
                    focused === "email" || formData.email ? "bg-slate-800" : ""
                  }`}
                >
                  Email
                </label>
                <div className="relative">
                  <AtSign
                    size={18}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      errors.email
                        ? "text-red-500"
                        : focused === "email"
                        ? "text-pink-400"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={`w-full px-12 py-3 bg-slate-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-white transition-all duration-300 ${
                      errors.email
                        ? "border-red-500"
                        : focused === "email"
                        ? "border-pink-400"
                        : "border-slate-700"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Champ Sujet */}
              <div className="relative mb-6">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 -top-5 px-1 text-sm font-semibold transition-all duration-300 ${
                    focused === "subject" || formData.subject
                      ? "text-purple-400"
                      : "text-gray-400"
                  } ${
                    focused === "subject" || formData.subject
                      ? "bg-slate-800"
                      : ""
                  }`}
                >
                  Sujet (optionnel)
                </label>
                <div className="relative">
                  <GitFork
                    size={18}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focused === "subject"
                        ? "text-purple-400"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    className={`w-full px-12 py-3 bg-slate-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white transition-all duration-300 ${
                      focused === "subject"
                        ? "border-purple-400"
                        : "border-slate-700"
                    }`}
                  />
                </div>
              </div>

              {/* Champ Message */}
              <div className="relative mb-6">
                <label
                  htmlFor="message"
                  className={`absolute left-4 -top-5 px-1 text-sm font-semibold transition-all duration-300 ${
                    focused === "message" || formData.message
                      ? "text-pink-400"
                      : "text-gray-400"
                  } ${
                    focused === "message" || formData.message
                      ? "bg-slate-800"
                      : ""
                  }`}
                >
                  Message
                </label>
                <div className="relative">
                  <MessageCircle
                    size={18}
                    className={`absolute left-4 top-6 -translate-y-1/2 transition-colors duration-300 ${
                      errors.message
                        ? "text-red-500"
                        : focused === "message"
                        ? "text-pink-400"
                        : "text-gray-500"
                    }`}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows="5"
                    className={`w-full px-12 py-3 bg-slate-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-white transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : focused === "message"
                        ? "border-pink-400"
                        : "border-slate-700"
                    }`}
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-pink-500 hover:bg-pink-600 text-gray-900 font-semibold py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 transform hover:scale-105 relative overflow-hidden flex items-center justify-center ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
