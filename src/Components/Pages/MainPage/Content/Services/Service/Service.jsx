import { NavLink } from "react-router-dom";
import styles from "./Service.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function Service(props) {
  return (
    <div className={styles.service}>
      <div>
        {/* <img className={styles.image} src={props.img} alt="Service"></img> */}
        <LazyLoadImage
          className={styles.image}
          alt="Service"
          effect="opacity"
          src={props.img}
        />
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

export default Service;
