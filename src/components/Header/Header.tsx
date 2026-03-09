import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.headerLogo} src='/web-app-manifest-192x192.png' />
            <span className={styles.headerText}>mikesabo.dev</span>
        </header>
    )
}

export default Header