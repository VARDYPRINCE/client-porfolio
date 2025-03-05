export const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I am well-versed in HTML, CSS and JavaScript, and other cutting
              edge frameworks and libraries, which allows me to implement
              interactive features. Additionally, I have experience working with
              content management systems (CMS) like WordPress.
            </p>
            <div className="about-btn">
              <button className="btn">Download CV</button>
            </div>
          </div>
        </div>

        <div className="col">
          {["Frontend", "Backend", "Database", "Blockchain"].map(
            (skillType) => (
              <div key={skillType} className="skills-box">
                <div className="skills-header">
                  <h3>{skillType}</h3>
                </div>
                <div className="skills-list">
                  {getSkills(skillType).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const getSkills = (type: string) => {
  switch (type) {
    case "Frontend":
      return [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Vue",
        "React",
        "Angular",
      ];
    case "Backend":
      return ["PHP", "JAVA", "Python", "C++"];
    case "Database":
      return ["MySQL", "PostgreSQL", "MongoDB"];
    case "Blockchain":
      return ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"];
    default:
      return [];
  }
};
