import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import hamburgerMenu from "./hamburger-menu.png";
import { NavLink } from "react-router-dom";
import styles from "./Drawer.module.css";
import { Icon } from "semantic-ui-react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerMenu({ menuTopItems, menuBottomItems }) {
  let menuItems = [
    { title: "Главная", link: "/", subMenu: [] },
    ...menuBottomItems,
    ...menuTopItems,
  ];
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [activeMenuItem, setActiveMenuItem] = React.useState(-1);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const SubMenuItems = ({ subMenu }) => (
    <div className={styles.subMenuContainer}>
      {subMenu.map((item, i) => (
        <NavLink
          exact
          className={styles.subMenuItem}
          activeClassName={styles.activeMenuItem}
          to={item.link}
          onClick={() => {
            setState({ ...state, left: false });
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {menuItems.map((menuItem, i) => (
        <div className={styles.menuContainer} key={i}>
          <div className={styles.menuItemAccordion}>
            <NavLink
              exact
              to={menuItem.link}
              activeClassName={styles.activeMenuItem}
              className={styles.menuItem}
              onClick={() => {
                setState({ ...state, left: false });
              }}
            >
              {menuItem.title}
            </NavLink>
            {menuItem.subMenu.length > 0 && (
              <Icon
                name={activeMenuItem === i ? "caret up" : "caret down"}
                className={styles.iconExpandSubmenu}
                onClick={() => {
                  activeMenuItem === i
                    ? setActiveMenuItem(-1)
                    : setActiveMenuItem(i);
                }}
              />
            )}
          </div>
          {menuItem.subMenu.length > 0 && activeMenuItem === i && (
            <SubMenuItems subMenu={menuItem.subMenu} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button
          onClick={toggleDrawer("left", true)}
          className={styles.hamburgerButton}
        >
          <img width={30} src={hamburgerMenu} alt="hamburgerMenu" />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

{
  /* <List className={styles.list}>
  {[...[{ ...menuItem }], ...menuItem.subMenu].map((item, index) => (
    <ListItem className={styles.listItem} button key={index}>
      <NavLink
        exact
        className={styles.menuItem}
        activeClassName={styles.activeMenuItem}
        to={item.link}
      >
        {item.title}
      </NavLink>
    </ListItem>
  ))}
</List>; */
}
