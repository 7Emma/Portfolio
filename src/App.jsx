import React, { useEffect, useState } from "react";
import ServicesSection from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingSpinner from "./components/LoadingSpinner";
import ProcessSection from "./pages/Processus";
import ExpertiseSection from "./pages/ExpertiseSection";
import CustomCursor from "./components/Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col min-h-screen bg-gradient from-slate-900 via-purple-900 to-slate-900 text-green-400">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <ExpertiseSection />
        <ServicesSection />
        <ProcessSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
