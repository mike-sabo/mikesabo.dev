import styles from "./Experience.module.css";

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "Sherwin-Williams",
    location: "Cleveland, OH",
    period: "2018 – Present",
    bullets: [
      "Build reusable AEM and React components using Java/Spring, HTL (HTML Template Language), TypeScript, JavaScript, SCSS, and CSS.",
      "Designed and implemented a whitelabel AEM site generation architecture that shares components while allowing custom themes and styling.",
      "Establish and maintain coding standards including code reviews, formatting/linting configurations, and documentation.",
      "Assist team members with troubleshooting, implementation, and completing sprint goals/tasks.",
      "Mentor team members on the effective use of GitHub Copilot and prompt engineering to support test-driven development (TDD), improve code quality, and streamline everyday tasks.",
      "Help build and maintain CI/CD pipelines using GitHub Actions, automating builds and generation of new projects.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "AXS Ticketing",
    location: "Cleveland, OH",
    period: "2016 – 2018",
    bullets: [
      "Built and maintained ticketing software for sports, music, and entertainment using ASP.NET, HTML, CSS, JavaScript, React, and C# Web API.",
      "Managed database updates and versioning with Liquibase, supporting Oracle and SQL Server.",
      "Enhanced the BackOffice Windows Forms app for event creation and setup.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Main Sequence Technology",
    location: "Willoughby, OH",
    period: "2014 – 2016",
    bullets: [
      "Developed API integrations for the PCRecruiter web app using VB.NET and C#.",
      "Built PCRCapture, a Chrome extension for data scraping and REST API integration with client databases.",
      "Contributed to the PCRecruiter hybrid mobile app for Android and iOS using Cordova and Handlebars.js.",
      "Maintained code using TFS.",
    ],
  },
  {
    title: "Systems Analyst / Technical Support",
    company: "Dolbey Systems",
    location: "Concord Township, OH",
    period: "2004 – 2014",
    bullets: [
      "Installed and maintained digital dictation and transcription servers in hospital environments.",
      "Provided on-site live training and support for system adoption.",
      "Provided technical support and troubleshooting complex issues for dealers and end users.",
      "Performed software testing, wrote technical documentation, and customized scripts for client workflows.",
      "Configured HL7 interfaces for integration with hospital EHR systems.",
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
