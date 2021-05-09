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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerMenu() {
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
      <List>
        <ListItem button>
          <NavLink to="124">О компании</NavLink>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          "Кровельные материалы",
          "Кровельные материалы 1",
          "Кровельные материалы 2",
          "Кровельные материалы 3",
        ].map((text, index) => (
          <ListItem button key={text}>
            <NavLink to="124">{text}</NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Ебаные системы",
          "Ебаные системы 1",
          "Ебаные системы 2",
          "Ебаные системы 3",
        ].map((text, index) => (
          <ListItem button key={text}>
            <NavLink to="124">{text}</NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Фасадные системы",
          "Фасадные системы 1",
          "Фасадные системы 2",
          "Фасадные системы 3",
        ].map((text, index) => (
          <ListItem button key={text}>
            <NavLink to="124">{text}</NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Водосточные системы",
          "Водосточные системы 1",
          "Водосточные системы 2",
          "Водосточные системы 3",
        ].map((text, index) => (
          <ListItem button key={text}>
            <NavLink to="124">{text}</NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <img width={30} src={hamburgerMenu} alt="hamburgerMenu"/>
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
