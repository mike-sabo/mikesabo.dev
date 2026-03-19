import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoBriefcase, GoMail, GoHome } from "react-icons/go";
import styles from "./Nav.module.css";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.navLinkItem}${isActive ? ` ${styles.navLinkActive}` : ""}`;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className={styles.nav}>
      {/* ── Desktop nav (≥768px) ───────────────────────── */}
      <div className={styles.desktopNav}>
        <div className={styles.desktopLinks}>
          <NavLink to="/" end className={navLinkClass}>
            <GoHome size={15} /> Home
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            <GoBriefcase size={15} /> Resume
          </NavLink>
        </div>
        <div className={styles.desktopSocial}>
          <a href="https://github.com/mike-sabo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={19} />
          </a>
          <a
            href="https://linkedin.com/in/michaelasabo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>
          <a href="mailto:michael.a.sabo@gmail.com" aria-label="Email">
            <GoMail size={19} />
          </a>
        </div>
      </div>

      {/* ── Mobile hamburger + sidenav (<768px) ────────── */}
      <button className={styles.hamburger} onClick={() => setIsOpen(true)} aria-label="Open menu">
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {isOpen && <div className={styles.overlay} onClick={close} />}

      <div className={`${styles.sidenav} ${isOpen ? styles.sidenavOpen : ""}`}>
        <div className={styles.sidenavHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <button className={styles.closebtn} onClick={close} aria-label="Close menu">
            &times;
          </button>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/" end onClick={close}>
            <GoHome size={20} /> Home
          </NavLink>
          <NavLink to="/resume" onClick={close}>
            <GoBriefcase size={20} /> Resume
          </NavLink>
        </div>

        <div className={styles.socialSection}>
          <span className={styles.socialTitle}>Connect with me</span>
          <div className={styles.socialIcons}>
            <a href="https://github.com/mike-sabo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/michaelasabo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:michael.a.sabo@gmail.com" aria-label="Email">
              <GoMail size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
