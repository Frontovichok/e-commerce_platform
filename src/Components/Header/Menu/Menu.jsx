import { NavLink } from "react-router-dom";
// import { Icon } from "semantic-ui-react";
import styles from "./Menu.module.css";

function RenderMenuSubItems({ subMenu }) {
  return (
    <div className={styles.menuSubItems}>
      {subMenu.map((subItem, i) => (
        <NavLink
          key={i}
          to={subItem.link}
          className={styles.menuSubItem}
          activeClassName={styles.activeMenuSubItem}
        >
          {subItem.title}
        </NavLink>
      ))}
    </div>
  );
}

function RenderMenuItem({ menuItem }) {
  return (
    <div className={styles.menuItems}>
      <NavLink
        to={menuItem.link}
        className={styles.menuItem}
        activeClassName={styles.activeMenuItem}
      >
        {menuItem.title}
      </NavLink>
      {menuItem.subMenu.length > 0 ? (
        <RenderMenuSubItems subMenu={menuItem.subMenu} />
      ) : null}
    </div>
  );
}

function Menu({ menuItems }) {
  return (
    <div className={styles.menuContainer}>
      {menuItems.map((menuItem, i) => (
        <RenderMenuItem key={i} menuItem={menuItem} />
      ))}
    </div>
  );
}

export default Menu;
