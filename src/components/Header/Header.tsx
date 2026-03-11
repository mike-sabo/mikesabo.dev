import styles from './Header.module.css'
import Nav from '../Nav/Nav';

function Header() {
    return (
        <div className={styles.headerWrap}>
            <header className={styles.header}>
                <span className={styles.headerText}>Mike Sabo</span>
                <Nav></Nav>
            </header>
        </div>
    )
}

export default Header