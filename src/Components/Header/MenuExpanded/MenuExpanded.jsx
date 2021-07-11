import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styles from "./MenuExpanded.module.css";

function MenuExpanded({ openState, setOpenState, menuItems }) {
  return (
    <div className={`${styles.menuExpanded} ${openState ? styles.open : ""}`}>
      <div className={styles.menuExpandedContainer}>
        <div className={styles.menuItems}>
          {menuItems.map((item, i) => (
            <div className={styles.menuItem}>
              <NavLink
                to={item.link}
                className={styles.menuItemLink}
                activeClassName={styles.activeLink}
                onClick={() => {
                  setOpenState(false);
                }}
              >
                {item.title}
              </NavLink>
              <Icon className={styles.menuItemIcon} name="angle right" />
              <div className={styles.subMenuContainer}>
                <NavLink
                  to={item.link}
                  className={styles.subMenuTitle}
                  activeClassName={styles.activeLink}
                  onClick={() => {
                    setOpenState(false);
                  }}
                >
                  {item.title}
                </NavLink>
                <div className={styles.subMenuItems}>
                  {item.subMenu.map((item, i) => (
                    <NavLink
                      to={item.link}
                      key={i}
                      className={styles.subMenuItem}
                      activeClassName={styles.activeLink}
                      onClick={() => {
                        setOpenState(false);
                      }}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuExpanded;
