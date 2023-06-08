import Image from "next/image";
import Link from "next/link";
import "./Work.css";
const Work = () => {
  return (
    <section className="Work" id="work">
      <div className="container">
        <h2>Work</h2>
        <div className="Work__Item left">
          <div className="Work__Img">
            <Image
              src="/palettes-hub.webp"
              alt="Palettes Hub Project"
              width={500}
              height={320}
            />
          </div>
          <div className="Work__Content">
            <h3>PalettesHub</h3>
            <div className="Work__Desc">
              <p>
                PalettesHub is a collection of user created color palettes to
                share between other developers and designers. Feel free to add
                your color palette suggestion in the create option.
              </p>
            </div>
            <div className="Work__Stack">
              <p>React Redux Firebase styled-components</p>
            </div>
            <div className="Work__Cta">
              <Link
                href="https://github.com/yashwanth-git/palettes-hub"
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
              <Link
                href="https://palettes-hub.netlify.app/"
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
            </div>
          </div>
        </div>
        <div className="Work__Item right">
          <div className="Work__Img">
            <Image
              src="/ablaze.webp"
              alt="Ablaze Project"
              width={500}
              height={320}
            />
          </div>
          <div className="Work__Content">
            <h3>Ablaze</h3>
            <div className="Work__Desc">
              <p>
                A web application that shows the list of games that are
                available in the market. View upcoming, popular and new games.
                Search specific game and get its details.
              </p>
            </div>
            <div className="Work__Stack">
              <p>React Redux Firebase styled-components Rawg API</p>
            </div>
            <div className="Work__Cta">
              <Link
                href="https://github.com/yashwanth-git/ablaze"
                target="_blank"
              >
                <Image
                  src="/github.svg"
                  width={30}
                  height={30}
                  alt="Github Link"
                />
              </Link>
              <Link href="https://ablaze.netlify.app/" target="_blank">
                <Image
                  src="/preview.svg"
                  width={30}
                  height={30}
                  alt="Preview Link"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="Work__Item left">
          <div className="Work__Img">
            <Image
              src="/imagize.webp"
              alt="Imagize Project"
              width={500}
              height={320}
            />
          </div>
          <div className="Work__Content">
            <h3>Imagize</h3>
            <div className="Work__Desc">
              <p>
                Imagize is an app that helps you find free to use,
                high-definition photos for your projects with a single click.
              </p>
            </div>
            <div className="Work__Stack">
              <p>Vue</p>
            </div>
            <div className="Work__Cta">
              <Link
                href="https://github.com/yashwanth-git/imagize"
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
              <Link
                href="https://imagize.netlify.app/"
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
            </div>
          </div>
        </div>
        <div className="Work__Item right">
          <div className="Work__Img">
            <Image
              src="/travel-advisor.webp"
              alt="Trip Advisor Project"
              width={500}
              height={320}
            />
          </div>
          <div className="Work__Content">
            <h3>Trip Advisor</h3>
            <div className="Work__Desc">
              <p>
                Travel Advisor is a web application that helps users to find
                nearby places to visit, restaurants, and hotels to stay along
                with weather conditions of the places.
              </p>
            </div>
            <div className="Work__Stack">
              <p>React RapidAPI GoogleMapsAPI WeatherAPI</p>
            </div>
            <div className="Work__Cta">
              <Link
                href="https://github.com/yashwanth-git/travel-advisor"
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
            </div>
          </div>
        </div>
        <div className="Work__Item left">
          <div className="Work__Img">
            <Image
              src="/wordle-clone.webp"
              alt="Imagize Project"
              width={500}
              height={320}
            />
          </div>
          <div className="Work__Content">
            <h3>Wordle Clone</h3>
            <div className="Work__Desc">
              <p>
                Clone of a game called Wordle which got acquired by New York
                Times for 1M USD
              </p>
            </div>
            <div className="Work__Stack">
              <p>HTML, CSS, JS</p>
            </div>
            <div className="Work__Cta">
              <Link
                href="https://github.com/yashwanth-git/wordle"
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
              <Link
                href="https://weldro.netlify.app/"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
