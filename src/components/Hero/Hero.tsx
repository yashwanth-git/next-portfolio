"use client";
import "./Hero.css";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
const Hero = () => {
  const mainEl: HTMLElement = document.querySelector("main") as HTMLElement;
  const socialIconsEl: HTMLElement = document.querySelector(
    ".social-icons"
  ) as HTMLElement;
  const headerEl: HTMLElement = document.querySelector("header") as HTMLElement;
  let lastOffsetY = window.pageYOffset;

  const scrollHandler = () => {
    console.log("hello");
    if (window.pageYOffset > lastOffsetY) {
      headerEl?.classList.remove("fixed-top");
      headerEl?.classList.add("hide");
    } else if (window.pageYOffset < 600) {
      headerEl?.classList.remove("fixed-top");
      headerEl?.classList.remove("hide");
    } else {
      headerEl?.classList.add("fixed-top");
      headerEl?.classList.remove("hide");
    }
    //Fixed Social Icons
    lastOffsetY = pageYOffset;
    if (
      window.pageYOffset >
      mainEl?.offsetHeight - socialIconsEl?.offsetHeight
    ) {
      socialIconsEl?.classList.add("change");
    } else {
      socialIconsEl?.classList.remove("change");
    }
  };
  useEffect(() => {
    scrollHandler();
  }, []);
  return (
    <main onScroll={scrollHandler}>
      <Navbar />
      <div className="Hero__wrapper">
        <div className="container">
          <section className="Hero">
            <div className="Hero__content">
              <span className="Hero__tag">
                Hello World!
                <span className="hand">
                  <Image src="/hand.webp" height={30} width={30} alt="hand" />
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
      <Sidebar />
    </main>
  );
};

export default Hero;
