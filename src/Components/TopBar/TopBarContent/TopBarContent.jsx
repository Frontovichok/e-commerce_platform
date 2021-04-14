import styles from "./TopBarContent.module.css";
import { Icon } from "semantic-ui-react";

function TopBarContent() {
  return (
    <>
      <div className={styles.topBar}>
        <ul className={styles.contentList}>
          <li>
            <Icon name="globe" size="large" />
            Кровля под ключ в Туле
          </li>
          <li>
            <Icon name="car" size="large" />
            Бесплатный выезд специалиста
          </li>
          <li>
            <Icon name="phone" size="large" />
            8 (923) 443-23-23
          </li>
          <li>
            <Icon name="clock outline" size="large" />
            08:00 - 22:00
          </li>
          <li>
            <ul className={styles.social}>
              <li>
                <a target="blank" href="https://iifrf.ru" className={styles.socialItem}><Icon name="instagram" size="large" /></a>
              </li>
              <li className={styles.socialItem}>
                <a target="blank" href="https://iifrf.ru" className={styles.socialItem}><Icon name="youtube" size="large" /></a>
              </li>
              <li className={styles.socialItem}>
                <a target="blank" href="https://iifrf.ru" className={styles.socialItem}><Icon name="vk" size="large" /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopBarContent;
