import { NavLink } from "react-router-dom";
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from "./RoofType.module.css";

function RoofType(props) {
  return (
    <div className={styles.roofType}>
      <div>
        <img className={styles.image} src={props.img} alt="Service"></img>
        <p className={styles.sticker}>{props.sticker}</p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.buttons}>
          <NavLink to={props.link}>Перейти в каталог</NavLink>
          <ModalWindow
            gallery={props.gallery}
            button={<button className={styles.galleryButton}>Галлерея</button>}
          />
        </div>
      </div>
    </div>
  );
}

export default RoofType;
