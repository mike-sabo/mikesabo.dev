import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <div className={styles.headerWrap}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.headerText}>
          Mike Sabo
        </NavLink>
        <Nav></Nav>
      </header>
    </div>
  );
}

export default Header;
