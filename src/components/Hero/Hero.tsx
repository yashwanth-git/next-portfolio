"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Hero.css";
const Hero = () => {
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null);
  const [socialIconsEl, setSocialIconsEl] = useState<HTMLElement | null>(null);
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    const socialIconsElement = document.querySelector(".social-icons");
    const headerElement = document.querySelector("header");

    if (mainElement instanceof HTMLElement) {
      setMainEl(mainElement);
    }

    if (socialIconsElement instanceof HTMLElement) {
      setSocialIconsEl(socialIconsElement);
    }

    if (headerElement instanceof HTMLElement) {
      setHeaderEl(headerElement);
    }
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      setScrollTop(
        (document.documentElement.scrollTop || window.pageYOffset) ?? 0
      );
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
      const scrollThreshold =
        (mainEl?.offsetHeight ?? 0) - (socialIconsEl?.offsetHeight ?? 0);

      const isScrolledPastThreshold =
        socialIconsEl !== null && socialIconsEl !== undefined
          ? window.pageYOffset > scrollThreshold
          : false;

      if (isScrolledPastThreshold) {
        socialIconsEl?.classList.add("change");
      } else {
        socialIconsEl?.classList.remove("change");
      }
    };
    let lastOffsetY = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);

  return (
    <main>
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
                Currently pursuing my Master&apos;s in Information Systems.
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
                width={500}
                height={500}
                priority
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
