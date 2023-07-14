"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const togglerRef = useRef<HTMLInputElement | null>(null);
  const [active, setActive] = useState<Boolean>(false);
  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <header className="Navbar__wrapper fixed-top">
      <div className="container">
        <nav className="Navbar">
          <div className="Logo">
            <svg
              width="64"
              height="64"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.40035 40.5017L40.0536 3.47163C41.9643 1.54134 45.0664 1.48929 47.0408 3.35439L86.2424 40.3873C88.2971 42.3283 88.3356 45.5854 86.3272 47.5745L47.1284 86.3965C45.1332 88.3726 41.9022 88.3184 39.9744 86.2765L3.31831 47.4516C1.46777 45.4916 1.50406 42.4175 3.40035 40.5017Z"
                fill="#01090E"
                stroke="#0195F5"
                strokeWidth="3"
              />
              <path
                d="M59.872 30.304L48.208 52.864V64H40V52.864L28.336 30.304H37.648L44.176 44.416L50.656 30.304H59.872Z"
                fill="#0195F5"
              />
            </svg>
          </div>
          <div
            className={`Toggler ${active ? "active" : ""} `}
            ref={togglerRef}
            onClick={toggleActive}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <ul className="Navbar__List">
            <li className="Navbar__Item">
              <Link href="#skills" className="Navbar__Link">
                Skills
              </Link>
            </li>
            <li className="Navbar__Item">
              <Link href="#work" className="Navbar__Link">
                Work
              </Link>
            </li>
            <li className="Navbar__Item">
              <Link href="#contact" className="Navbar__Link">
                Contact
              </Link>
            </li>
            <li className="Navbar__Cta">
              <Link
                href="/assets/yashwanth_resume.pdf"
                target="_blank"
                className="Btn Navbar__Btn"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
