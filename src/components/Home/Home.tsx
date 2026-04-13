import styles from "./Home.module.css";
import profileSvg from "../../assets/me.svg";
import Projects from "../Projects/Projects";

const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3 / SCSS",
  "AEM",
  "Playwright",
  "Node.js",
  "Git",
  "GitHub Actions",
  "Docker",
  "Java (Spring)",
  "REST APIs",
  "Agile / Scrum",
];

function Home() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.heading}>About Me</h2>
          <img src={profileSvg} alt="Michael Sabo" className={styles.profileImage} />
          <p className={styles.bio}>
            I'm a Senior Full Stack Engineer at Sherwin-Williams, where I've been since 2018. Most of my day-to-day
            involves building reusable components in AEM using Java, HTL, TypeScript, and SCSS — but I also work
            heavily with React and have a strong frontend focus overall.
          </p>

          <p className={styles.bio}>
            I care a lot about writing code that's easy to maintain and easy for other developers to pick up. I do a
            good amount of mentoring on my team, whether that's helping folks with implementation problems, doing code
            reviews, or showing people how to actually use tools like GitHub Copilot in a way that improves their work.
            I also help build out our CI/CD pipelines with GitHub Actions.
          </p>
          <p className={styles.bio}>
            I didn't start out in development — I spent about ten years doing systems analyst and technical support
            work in hospital environments before making the switch. After getting my degree, I worked on ticketing
            software, Chrome extensions, and hybrid mobile apps before landing where I am now. That background gives me
            a practical mindset — I like to understand the full picture, not just the code.
          </p>
          <p className={styles.bio}>
            When I'm not coding, I'm usually woodworking in my shop, singing barbershop harmony, or spending time with
            my family. I also like to tinker with personal projects and try out new tech whenever I can.
          </p>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Projects />
    </>
  );
}

export default Home;
