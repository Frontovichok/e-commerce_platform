import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <NavLink to={`/`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/1280px-Service_mark.svg.png" className={styles.logoImg} alt="logo"></img>
      </NavLink>
    </div>
  );
}

export default Logo;
