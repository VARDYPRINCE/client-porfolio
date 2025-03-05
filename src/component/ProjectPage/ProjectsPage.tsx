import React, { useEffect } from "react";
import work1 from "../../assets/work-1.jpg";
import work2 from "../../assets/work-2.jpg";
import work3 from "../../assets/work-3.jpg";
import work4 from "../../assets/work-4.jpg";
import work5 from "../../assets/work-5.jpg";
import work6 from "../../assets/work-6.jpg";
import work7 from "../../assets/work-7.jpg";
import ScrollReveal from "scrollreveal";

interface Project {
  id: number;
  title: string;
  image: any;
  description: string;
  others: string;
}

const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Pursuing Best",
      image: work1,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 2,
      title: "Pursuing Best",
      image: work2,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 3,
      title: "Pursuing Best",
      image: work3,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 4,
      title: "Pursuing Best",
      image: work4,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 5,
      title: "Pursuing Best",
      image: work5,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 6,
      title: "Pursuing Best",
      image: work6,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
    {
      id: 7,
      title: "Pursuing Best",
      image: work7,
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      others: "pursing best",
    },
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".hero-section", { delay: 100 });
    sr.reveal(".project-card", { interval: 200 });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="portfolio-container">
      <div className="hero-section">
        <h1 className="hero-background-text">Works</h1>
        <p className="hero-subtitle">PORTFOLIO</p>
        <h2 className="hero-title">Done Projects</h2>
      </div>

      <main className="portfolio-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="view-button">{project.title}</div>
                </div>
              </div>
              <div className="project-info">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;