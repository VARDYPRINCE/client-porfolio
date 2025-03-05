import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { ThemeProvider } from "./Context/ThemeContext";
import { Navbar } from "./component/Navbar/Navbar";
import { HeroSection } from "./component/HeroSection/HeroSection";
import { AboutSection } from "./component/AboutSection/AboutSection";
import { ProjectsSection } from "./component/ProjectSection/ProjectSection";
import { Footer } from "./component/Footer/Footer";
import ContactSection from "./component/ContactSection/ContactSection";
import Testimonial from "./component/Testimonial/Testimonial";
import ProjectsPage from "./component/ProjectPage/ProjectsPage";

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    return () => {
      sr.destroy();
      srLeft.destroy();
      srRight.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main className="wrapper">
                  <HeroSection />
                  <AboutSection />
                  <ProjectsSection />
                  <Testimonial />
                  <ContactSection />
                </main>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
