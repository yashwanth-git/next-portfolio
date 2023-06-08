import "./Skills.css";
const Skills = () => {

  const languages: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SQL",
  ];
  const frameworks: string[] = [
    "React",
    "Vue",
    "Webpack",
    "SASS",
    "Express",
    "MongoDB",
    "Jest",
    "RTL",
  ];
  const tools: string[] = ["VS Code", "Github", "Chrome Dev Tools", "Postman"];
  return (
    <section className="Skills p-2" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="Skill__Set">
          <div className="Skill__Card">
            <h3>Languages:</h3>
            <ul className="Skill__List">
              {languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
          <div className="Skill__Card">
            <h3>Frameworks:</h3>
            <ul className="Skill__List">
              {frameworks.map((framework) => (
                <li>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="Skill__Card">
            <h3>Tools:</h3>
            <ul className="Skill__List">
              {tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
