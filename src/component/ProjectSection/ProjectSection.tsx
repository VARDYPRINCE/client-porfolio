import { useState } from "react";
import { FiBriefcase, FiUsers, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";

export const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const projectsData = [
    {
      icon: <FiBriefcase size={50} />,
      title: "Completed",
      description: "15+ Finished Projects",
    },
    {
      icon: <FiUsers size={50} />,
      title: "Clients",
      description: "25+ Happy Clients",
    },
    {
      icon: <FiAward size={50} />,
      title: "Experience",
      description: "7+ Years in the field",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projectsData.map((project, index) =>
          project.title === "Completed" ? (
            <Link
              to="/projects"
              className="project-box"
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              {isHovered ? (
                <div className="hover-content">
                  <h3>View Projects</h3>
                </div>
              ) : (
                <>
                  {project.icon}
                  <h3>{project.title}</h3>
                  <label>{project.description}</label>
                </>
              )}
            </Link>
          ) : (
            <div key={index} className="project-box">
              {project.icon}
              <h3>{project.title}</h3>
              <label>{project.description}</label>
            </div>
          )
        )}
      </div>
    </section>
  );
};
