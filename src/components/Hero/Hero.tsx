import "./Hero.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="Hero__wrapper">
      <div className="container">
        <section className="Hero">
          <div className="Hero__content">
            <span className="Hero__tag">
              Hello World!
              <span className="hand">
                <Image
                  src="/hand.webp"
                  height={30}
                  width={30}
                  alt="hand"
                />
              </span>
            </span>
            <h1>I'm Yashwanth</h1>
            <p className="Hero__desc">
              A design minded frontend developer, building things for the web.
              Currently pursuing my Master’s in Information Systems.
            </p>
            <div className="Hero__Cta">
              <a
                className="Hero__Btn"
                href="mailto:yashwanth.off@gmail.com"
                target="_blank"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="Hero__Img">
            <Image
              src="/hero_image.webp"
              alt="Yashwanth Sridharan"
              width="500"
              height="500"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
