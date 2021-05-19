import styles from "./TopBarContent.module.css";
import { Icon } from "semantic-ui-react";

function TopBarContent() {
  return (
    <>
      <div className={styles.topBar}>
        <ul className={styles.contentList}>
          <li>
            <Icon name="globe" size="large" />
            Кровля под ключ в{" "}
            <strong className={styles.colored}>Тульской</strong> и{" "}
            <strong className={styles.colored}>Московской области</strong>
          </li>
          <li>
            <Icon name="car" size="large" />
            Бесплатный выезд специалиста
          </li>
          <li>
            <Icon name="clock outline" size="large" />
            08:00 - 22:00
          </li>
          <li>
            <Icon name="phone" size="large" />8 (923) 443-23-23
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopBarContent;
