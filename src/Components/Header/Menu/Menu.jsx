import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItems}>
        <NavLink to={`/about`} className={styles.menuItem}>
          О компании
        </NavLink>
      </div>
      <div className={styles.menuItems}>
        <NavLink to={`/price`} className={styles.menuItem}>
          Цены
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/calculate`} className={styles.menuSubItem}>
            Калькулятор
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink to={`/krovelnye-materialy`} className={styles.menuItem}>
          Кровельные материалы
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/krovelnye-materialy-1`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/krovelnye-materialy-2`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/krovelnye-materialy-3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink to={`/3`} className={styles.menuItem}>
          Ебаные системы
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink to={`/fasadnye-sistemy`} className={styles.menuItem}>
          Фасадные системы
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink to={`/vodostochnye-sistemy`} className={styles.menuItem}>
          Водосточные системы
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
          <NavLink to={`/3`} className={styles.menuSubItem}>
            Кровельные материалы
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Menu;
