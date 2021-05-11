import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navbarItems}>
        <NavLink
          to="krovelnye-materialy/metallocherepitca"
          className={styles.item}
        >
          Металлочерепица
        </NavLink>
        <NavLink
          to="krovelnye-materialy/gibkaya cherepitca"
          className={styles.item}
        >
          Гибкая черепица
        </NavLink>
        <NavLink to="krovelnye-materialy/profnastil" className={styles.item}>
          Профнастил
        </NavLink>
        <NavLink
          to="krovelnye-materialy/kompositnaya cherepitca"
          className={styles.item}
        >
          Композитная черепица
        </NavLink>
        <NavLink
          to="krovelnye-materialy/naturalnaya cherepitca"
          className={styles.item}
        >
          Натуральная черепица
        </NavLink>
        <NavLink
          to="krovelnye-materialy/falcevaya cherepitca"
          className={styles.item}
        >
          Фальцевая кровля
        </NavLink>
        <NavLink
          to="krovelnye-materialy/gidroizolyazionnye materialy"
          className={styles.item}
        >
          Рулонные гидроизоляционные материалы
        </NavLink>
        <NavLink
          to="krovelnye-materialy/kopmplectuyshie"
          className={styles.item}
        >
          Комплектующие
        </NavLink>
      </ul>
    </div>
  );
}
export default Navbar;
