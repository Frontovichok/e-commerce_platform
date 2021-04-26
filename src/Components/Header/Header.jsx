import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";
import DrawerMenu from "./Drawer/Drawer";

function Header() {
  const isMobile = window.innerWidth <= 500;
  return (
    <div className={styles.header}>
      <Logo />
      {isMobile ? <DrawerMenu /> : <Menu />}
    </div>
  );
}

export default Header;
