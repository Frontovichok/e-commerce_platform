import RoofTypes from "./RoofTypes/RoofTypes";
import Navbar from "./NavBar/Navbar";
import ContactWithMe from "../../../ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";

function Content() {
  return (
    <div className={styles.container}>
      <p>Кровельная залупа</p>
      <div className={styles.content}>
        <Navbar />
        <div>
          <RoofTypes />
          <Advaces />
          <div className={styles.contactWithMe2}>
            <ContactWithMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
