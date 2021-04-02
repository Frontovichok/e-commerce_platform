import styles from "./Footer.module.css";
import FooterMenu from "./FooterMenu/FooterMenu";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Footer;
