import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImg from "./logo2.svg";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <NavLink to={`/`} className={styles.logoLink}>
        <img src={logoImg} className={styles.logoImg} alt="logo"></img>
        <p className={styles.logoText}>Кровля Тула</p>
      </NavLink>
    </div>
  );
}

export default Logo;
