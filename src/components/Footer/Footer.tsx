import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a
            href="https://github.com/mike-sabo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/michaelasabo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:michael.a.sabo@gmail.com" className={styles.link} aria-label="Email">
            <GoMail size={20} />
          </a>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Michael Sabo</p>
      </div>
    </footer>
  );
}

export default Footer;
