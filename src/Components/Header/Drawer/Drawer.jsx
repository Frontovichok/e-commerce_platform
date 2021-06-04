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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerMenu({ menuItems }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {menuItems.map((menuItem, i) => (
        <>
          <List className={styles.list}>
            {[...[{ ...menuItem }], ...menuItem.subMenu].map((item, index) => (
              <ListItem className={styles.listItem} button key={index}>
                <NavLink
                  className={styles.menuItem}
                  activeClassName={styles.activeMenuItem}
                  to={item.link}
                >
                  {item.title}
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </>
      ))}
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
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
