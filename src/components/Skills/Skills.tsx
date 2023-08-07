import "./Skills.css";
const Skills = () => {
  type SkillsProps = {
    heading: string;
    listItems: string[];
  };

  const skills: SkillsProps[] = [
    {
      heading: "Languages",
      listItems: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
    },
    {
      heading: "Frameworks",
      listItems: [
        "React",
        "Vue",
        "Webpack",
        "SASS",
        "Express",
        "MongoDB",
        "Jest",
        "RTL",
      ],
    },
    {
      heading: "Tools",
      listItems: ["VS Code", "Github", "Chrome Dev Tools", "Postman"],
    },
  ];
  return (
    <section className="Skills p-2" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="Skill__Set">
          {Object.values(skills).map((skill) => {
            const { heading, listItems } = skill;
            return (
              <div className="Skill__Card" key={heading}>
                <h3>{heading}</h3>
                <ul className="Skill__List">
                  {listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
