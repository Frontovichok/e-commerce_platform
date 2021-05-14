import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItems}>
        <NavLink
          to={`/about`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          О компании
        </NavLink>
      </div>
      <div className={styles.menuItems}>
        <NavLink
          to={`/price`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          Цены
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink to={`/price/calculate`} className={styles.menuSubItem}>
            Калькулятор
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink
          to={`/krovelnye-materialy`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
          Кровельные материалы
        </NavLink>
        <div className={styles.menuSubItems}>
          <NavLink
            to={`/krovelnye-materialy/metallocherepitca`}
            className={styles.menuSubItem}
            activeClassName={styles.activeMenuSubItem}
          >
            Металлочерепица
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/gibkaya_cherepitca`}
            className={styles.menuSubItem}
          >
            Гибкая черепица
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/profnastil`}
            className={styles.menuSubItem}
          >
            Профнастил
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/kompositnaya_cherepitca`}
            className={styles.menuSubItem}
          >
            Композитная черепица
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/naturalnaya_cherepitca`}
            className={styles.menuSubItem}
          >
            Натуральная черепица
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/falcevaya_cherepitca`}
            className={styles.menuSubItem}
          >
            Фасадная черепица
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/gidroizolyazionnye_materialy`}
            className={styles.menuSubItem}
          >
            гидроизоляционные материалы
          </NavLink>
          <NavLink
            to={`/krovelnye-materialy/kopmplectuyshie`}
            className={styles.menuSubItem}
          >
            Комплектующие
          </NavLink>
        </div>
      </div>
      <div className={styles.menuItems}>
        <NavLink
          to={`/3`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
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
        <NavLink
          to={`/fasadnye-sistemy`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
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
        <NavLink
          to={`/vodostochnye-sistemy`}
          className={styles.menuItem}
          activeClassName={styles.activeMenuItem}
        >
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
      <div className={styles.menuItems}>
        <Icon name="cart" size="big" />
      </div>
    </div>
  );
}

export default Menu;
