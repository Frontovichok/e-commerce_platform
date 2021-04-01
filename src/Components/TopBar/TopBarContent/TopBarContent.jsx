import styles from "./TopBarContent.module.css";
import { Icon } from "semantic-ui-react";

function TopBarContent() {
  return (
    <>
      <div className={styles.topBar}>
        <ul className={styles.contentList}>
          <li>
            <Icon name="globe" size="large" />
            Строительство кровли в Москве под ключ
          </li>
          <li>
            <Icon name="phone" size="large" />
            8(923)443-23-23
          </li>
          <li>
            <Icon name="clock outline" size="large" />
            Без выходных
          </li>
          <li>
            <ul className={styles.social}>
              <li className={styles.socialItem}>
                <Icon name="instagram" size="large" /> fdbsdfg
              </li>
              <li className={styles.socialItem}>
                <Icon name="youtube" size="large" />
              </li>
              <li className={styles.socialItem}>
                <Icon name="vk" size="large" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopBarContent;
