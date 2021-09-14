import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImg from "./logo2.svg";
import { setSearchQuery } from "../../../Redux/actions/productsActions";

function Logo({ setSearchQuery }) {
  return (
    <div className={styles.logoContainer}>
      <NavLink
        to={`/`}
        className={styles.logoLink}
        onClick={() => setSearchQuery("")}
      >
        <img src={logoImg} className={styles.logoImg} alt="logo"></img>
        <p className={styles.logoText}>Кровля Тула</p>
      </NavLink>
    </div>
  );
}

export default connect(null, { setSearchQuery })(Logo);
