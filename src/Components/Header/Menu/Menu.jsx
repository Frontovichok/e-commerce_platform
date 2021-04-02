import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <NavLink to={`/1`} className={styles.menuItem}>
        О компании
      </NavLink>
      <NavLink to={`/2`} className={styles.menuItem}>
        Услуги
      </NavLink>
      <NavLink to={`/3`} className={styles.menuItem}>
        Кровельные материалы
      </NavLink>
      <NavLink to={`/4`} className={styles.menuItem}>
        Фасадные системы
      </NavLink>
      <NavLink to={`/5`} className={styles.menuItem}>
        Водосточные системы
      </NavLink>
    </div>
  );
}

export default Menu;
