import { NavLink } from "react-router-dom";
import styles from "./PriceNavBar.module.css";

function PriceNavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navbarItems}>
        <NavLink to="/price" className={styles.item}>
          Цены за работу
        </NavLink>
        <NavLink to="/price2" className={styles.item}>
          Цены на материалы
        </NavLink>
        <NavLink to="/price2" className={styles.item}>
          Калькулятор
        </NavLink>
      </ul>
    </div>
  );
}
export default PriceNavBar;
