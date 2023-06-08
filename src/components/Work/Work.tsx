import Image from "next/image";
import Link from "next/link";
import "./Work.css";
const Work = () => {
  type WorkProps = {
    direction: string;
    imgSrc: string;
    altName: string;
    projectName: string;
    projectDesc: string;
    projectStack: string[];
    projectGithub: string;
    projectLive: string;
  };
  const works: WorkProps[] = [
    {
      direction: "left",
      imgSrc: "/palettes-hub.webp",
      altName: "Palettes Hub Project",
      projectName: "Palettes Hub",
      projectDesc:
        "PalettesHub is a collection of user created color palettes to share between other developers and designers. Feel free to add your color palette suggestion in the create option.",
      projectStack: ["React", "Redux", "Firebase", "styled-components"],
      projectGithub: "https://github.com/yashwanth-git/palettes-hub",
      projectLive: "https://palettes-hub.netlify.app/",
    },
    {
      direction: "right",
      imgSrc: "/ablaze.webp",
      altName: "Ablaze Project",
      projectName: "Ablaze",
      projectDesc:
        "A web application that shows the list of games that are available in the market. View upcoming, popular and new games. Search specific game and get its details.",
      projectStack: [
        "React",
        "Redux",
        "Firebase",
        "styled-components",
        "Rawg API",
      ],
      projectGithub: "https://github.com/yashwanth-git/ablaze",
      projectLive: "https://ablaze.netlify.app/",
    },
    {
      direction: "left",
      imgSrc: "/imagize.webp",
      altName: "Imagize Project",
      projectName: "Imagize",
      projectDesc:
        "Imagize is an app that helps you find free to use, high-definition photos for your projects with a single click.",
      projectStack: ["Vue"],
      projectGithub: "https://github.com/yashwanth-git/imagize",
      projectLive: "https://imagize.netlify.app/",
    },
    {
      direction: "right",
      imgSrc: "/travel-advisor.webp",
      altName: "Travel Advisor Project",
      projectName: "Travel Advisor",
      projectDesc:
        "Travel Advisor is a web application that helps users to find nearby places to visit, restaurants, and hotels to stay along with weather conditions of the places.",
      projectStack: ["React", "RapidAPI", "GoogleMapsAPI", "WeatherAPI"],
      projectGithub: "https://github.com/yashwanth-git/travel-advisor",
      projectLive: "",
    },
    {
      direction: "left",
      imgSrc: "/wordle-clone.webp",
      altName: "Weldro Project",
      projectName: "Weldro",
      projectDesc:
        "Clone of a game called Wordle which got acquired by New York Times for 1M USD",
      projectStack: ["HTML, CSS, JS"],
      projectGithub: "https://github.com/yashwanth-git/wordle",
      projectLive: "https://weldro.netlify.app/",
    },
  ];
  return (
    <section className="Work" id="work">
      <div className="container">
        <h2>Works</h2>
        {Object.values(works).map((work) => {
          const {
            direction,
            imgSrc,
            altName,
            projectName,
            projectDesc,
            projectStack,
            projectGithub,
            projectLive,
          } = work;
          return (
            <div className={`Work__Item ${direction}`}>
              <div className="Work__Img">
                <Image src={imgSrc} alt={altName} width={500} height={320} />
              </div>
              <div className="Work__Content">
                <h3>{projectName}</h3>
                <div className="Work__Desc">
                  <p>{projectDesc}</p>
                </div>
                <div className="Work__Stack">
                  <p>{projectStack.join(" ")}</p>
                </div>
                <div className="Work__Cta">
                  <Link
                    href={projectGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/github.svg"
                      alt="Github Link"
                      width={30}
                      height={30}
                    />
                  </Link>
                  {projectLive.length > 0 && projectLive !== "" && (
                    <Link
                      href={projectLive}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/preview.svg"
                        alt="Preview Link"
                        width={30}
                        height={30}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
