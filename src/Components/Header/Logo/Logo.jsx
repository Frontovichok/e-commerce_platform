import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <NavLink to={`/`}>
        <img src="https://кровля-в-москве.рф/sites/all/themes/roof/img/logo2.png" className={styles.logoImg}></img>
      </NavLink>
    </div>
  );
}

export default Logo;
