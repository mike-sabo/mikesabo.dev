import styles from './Hero.module.css'

interface HeroProps {
  name: string
  avatarSrc: string
  greeting?: string
  taglines?: string[]
}

function Hero({ name, avatarSrc, greeting = "Hi, I'm", taglines = [] }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>
      <img
        className={styles.avatar}
        src={avatarSrc}
        alt={name}
      />
      <h1 className={styles.heading}>
        {greeting} <span className={styles.name}>{name}</span>
      </h1>
      {taglines.length > 0 && (
        <p className={styles.tagline}>
          {taglines.map((tagline) => (
            <span key={tagline}>{tagline}</span>
          ))}
        </p>
      )}
    </section>
  )
}

export default Hero
