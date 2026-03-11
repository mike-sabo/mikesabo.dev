

import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoHome, GoPerson, GoBriefcase, GoCode, GoMail } from 'react-icons/go'
import styles from './Nav.module.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      <div className={`${styles.sidenav} ${isOpen ? styles.sidenavOpen : ''}`}>
        <div className={styles.sidenavHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <button
            className={styles.closebtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className={styles.navLinks}>
          <a href="#home"><GoHome size={20} /> Home</a>
          <a href="#about"><GoPerson size={20} /> About</a>
          <a href="#experience"><GoBriefcase size={20} /> Experience</a>
          <a href="#projects"><GoCode size={20} /> Projects</a>
          <a href="#contact"><GoMail size={20} /> Contact</a>
        </div>

        <div className={styles.socialSection}>
          <span className={styles.socialTitle}>Connect with me</span>
          <div className={styles.socialIcons}>
            <a href="https://github.com/mike-sabo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/michaelasabo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:michael.a.sabo@gmail.com" aria-label="Email">
              <GoMail size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav