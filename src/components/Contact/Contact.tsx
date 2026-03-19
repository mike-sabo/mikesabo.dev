import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.sub}>
          Have a question, an idea, or just want to say hello? Reach out through any of the links below.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/mike-sabo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/michaelasabo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:michael.a.sabo@gmail.com"
            className={styles.link}
          >
            <GoMail size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
