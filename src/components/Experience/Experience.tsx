import styles from "./Experience.module.css";

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "Sherwin-Williams",
    location: "Cleveland, OH",
    period: "2018 – Present",
    bullets: [
      "Design and build reusable AEM components and modern frontend solutions using Java, HTL, React, and TypeScript, enabling consistent, scalable implementations across multiple brand websites.",
      "Design and implement a multi-brand (white-label) theming architecture enabling shared components to support distinct brand identities without code duplication.",
      "Deliver WCAG 2.1-compliant interfaces using semantic HTML, ARIA patterns, and automated accessibility testing, supporting compliance across all digital properties.",
      "Establish and enforce frontend engineering standards including code review guidelines, linting configurations, and documentation; mentor 5+ internal and vendor developers.",
      "Train and mentor engineers on effective use of GitHub Copilot and prompt engineering techniques; incorporate these tools into test-driven development (TDD) workflows to accelerate delivery and improve code quality and test coverage.",
      "Maintain and evolve CI/CD pipelines using GitHub Actions, automating builds, tests, and deployments to improve release reliability and team velocity.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "AXS Ticketing",
    location: "Cleveland, OH",
    period: "2016 – 2018",
    bullets: [
      "Built and maintained responsive ticketing platform interfaces using React, JavaScript, HTML, and CSS, serving sports and entertainment venues.",
      "Collaborated with UX designers to deliver accessible, mobile-first features improving usability across devices.",
      "Supported frontend build pipelines and CI/CD processes, improving release reliability for production deployments.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Main Sequence Technology",
    location: "Willoughby, OH",
    period: "2014 – 2016",
    bullets: [
      "Built PCRCapture, a Chrome extension with a custom UI enabling recruiters to capture and sync candidate data via REST APIs.",
      "Developed hybrid mobile app interfaces for Android and iOS using Cordova, improving cross-platform feature parity.",
      "Refactored and optimized the PCRecruiter web application frontend to improve performance and reduce complexity.",
    ],
  },
  {
    title: "Systems Analyst / Technical Support",
    company: "Dolbey Systems",
    location: "Concord Township, OH",
    period: "2004 – 2014",
    bullets: [
      "Deployed and supported enterprise software systems in hospital environments; authored technical documentation and automation scripts.",
    ],
  },
];

const education = [
  {
    degree: "Associate of Applied Science in Computer Information Systems",
    school: "Lakeland Community College",
    location: "Kirtland, OH",
    year: "2014",
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Resume</h2>
        <div className={styles.timeline}>
          {jobs.map((job) => (
            <div key={`${job.company}-${job.title}`} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <span className={styles.company}>
                    {job.company} — {job.location}
                  </span>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.education}>
          <h2 className={styles.heading}>Education</h2>
          <div className={styles.timeline}>
            {education.map((edu) => (
              <div key={edu.school} className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{edu.degree}</h3>
                    <span className={styles.company}>
                      {edu.school} — {edu.location}
                    </span>
                  </div>
                  <span className={styles.period}>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
