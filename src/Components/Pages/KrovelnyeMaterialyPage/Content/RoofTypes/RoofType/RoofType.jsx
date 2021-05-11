import { NavLink } from "react-router-dom";
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
        <NavLink to="/bla">Подробнее</NavLink>
      </div>
    </div>
  );
}

export default RoofType;
