import Link from "next/link";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="Navbar__wrapper fixed-top">
      <div className="container">
        <nav className="Navbar">
          <div className="Logo">
            <img src="/assets/Logo.svg" alt="Logo" />
          </div>
          <div className="Toggler">
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
                className="Btn"
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
