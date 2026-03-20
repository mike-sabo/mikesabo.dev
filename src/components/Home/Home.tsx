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
            I’m a Senior Full Stack Developer with a strong focus on frontend engineering, currently working at
            Sherwin-Williams. Over the past several years, I’ve specialized in building scalable, component-driven web
            applications—particularly within Adobe Experience Manager (AEM)—while also contributing to modern frontend
            experiences using technologies like React and TypeScript.
          </p>

          <p className={styles.bio}>
            My work sits at the intersection of engineering and usability. I enjoy designing clean, maintainable
            component architectures and creating intuitive user interfaces that solve real business problems. Along the
            way, I’ve mentored other developers, helped improve team workflows, and explored ways to integrate emerging
            tools like AI-assisted development into everyday engineering practices.
          </p>
          <p className={styles.bio}>
            Before my current role, I built a broad technical foundation across multiple industries, working with .NET,
            JavaScript frameworks, and even developing Chrome extensions and hybrid mobile apps. That range of
            experience still shapes how I approach problems today—practically, creatively, and with an eye toward
            long-term maintainability.
          </p>
          <p className={styles.bio}>
            Outside of work, I enjoy building personal projects, exploring new technologies, and creating tools that
            make everyday tasks easier. I also spend time woodworking and tinkering in my shop, and I’m a big fan of
            barbershop harmony. I value time spent with family and community.
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
