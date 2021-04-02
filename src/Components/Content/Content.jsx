import Carousel from "./Carousel/Carousel";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Carousel />
      </div>
    </div>
  );
}

export default Content;
