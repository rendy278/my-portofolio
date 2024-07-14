import { useState, useEffect } from "react";
import About from "./apps/About";
import Header from "./components/Header";
import HeroSection from "./apps/HeroSection";
import Modal from "./components/Modals";
import { ThemeProvider } from "./hooks/ThemeContext";
import Skills from "./apps/Skills";
import Experience from "./apps/Experience";
import Projects from "./apps/Projects";
import Contact from "./apps/Contact";

const App = () => {
  const [yourname, setYourname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const nameSubmitted = localStorage.getItem("nameSubmitted");
    if (nameSubmitted) {
      setYourname(nameSubmitted);
      setIsModalOpen(false);
    }
  }, []);

  const handleNameSubmit = (name) => {
    setYourname(name);
    setIsModalOpen(false);
    localStorage.setItem("nameSubmitted", name);
  };

  return (
    <main className="overflow-x-hidden " id="home">
      <ThemeProvider>
        <Modal isOpen={isModalOpen} onSubmit={handleNameSubmit} />
        <Header />
        <HeroSection yourname={yourname} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </ThemeProvider>
    </main>
  );
};

export default App;
