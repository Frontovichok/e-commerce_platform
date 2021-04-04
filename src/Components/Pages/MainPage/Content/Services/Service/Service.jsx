import styles from "./Service.module.css";

function Service(props) {
  return (
    <div className={styles.service}>
      <img className={styles.image} src={props.img}></img>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.sticker}>{props.sticker}</p>
    </div>
  );
}

export default Service;
