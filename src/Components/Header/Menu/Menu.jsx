import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <NavLink to={`/about`} className={styles.menuItem}>
        О компании
      </NavLink>
      <NavLink to={`/price`} className={styles.menuItem}>
        Цены
        <div className={styles.menuSubItems}>
          <NavLink to={`/calculate`} className={styles.menuSubItem}>
            Калькулятор
          </NavLink>
        </div>
      </NavLink>
      <NavLink to={`/krovelnye-materialy`} className={styles.menuItem}>
        Кровельные материалы
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
      </NavLink>
      <NavLink to={`/3`} className={styles.menuItem}>
        Ебаные системы
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
      </NavLink>
      <NavLink to={`/fasadnye-sistemy`} className={styles.menuItem}>
        Фасадные системы
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
      </NavLink>
      <NavLink to={`/3`} className={styles.menuItem}>
        Водосточные системы
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
      </NavLink>
    </div>
  );
}

export default Menu;
