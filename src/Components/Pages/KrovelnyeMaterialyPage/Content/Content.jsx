import Services from "./Services/RoofTypes";
import Navbar from "./NavBar/Navbar";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.container}>
      <p>Кровельная залупа</p>
      <div className={styles.content}>
        <Navbar />
        <Services />
      </div>
    </div>
  );
}

export default Content;
