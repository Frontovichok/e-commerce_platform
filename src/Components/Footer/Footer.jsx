import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styles from "./Footer.module.css";
import FooterMenu from "./FooterMenu/FooterMenu";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.columnTitle}>О компании</p>
          <div className={styles.columnItems}>
            <div className={styles.itemContainer}>
              <Icon name="building outline" size="small" />
              <p className={styles.item}>ИП Голодников</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.columnTitle}>Контакты</p>
          <div className={styles.columnItems}>
            <div className={styles.itemContainer}>
              <Icon name="map marker alternate" size="small" />
              <p className={styles.item}>Тула</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="phone" size="small" />
              <p className={styles.item}>+7 (916) 555 55 55</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="phone" size="small" />
              <p className={styles.item}>+7 (916) 555 55 55</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="clock outline" size="small" />
              <p className={styles.item}>08:00 - 22:00 (ежедневно)</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="mail outline" size="small" />
              <p className={styles.item}>mail@mail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.columnTitle}>Мы в соцсетях</p>
          <div className={styles.columnItems}>
            <div className={styles.itemContainer}>
              <Icon name="vk" size="small" />
              <p className={styles.item}>Вконтакте</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="instagram" size="small" />
              <p className={styles.item}>Instagram</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="youtube" size="small" />
              <p className={styles.item}>YouTube</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="yandex" size="small" />
              <p className={styles.item}>Яндекс отзывы</p>
            </div>
            <div className={styles.itemContainer}>
              <Icon name="google" size="small" />
              <p className={styles.item}>Google отзывы</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.columnTitle}>Подписаться на нас</p>
          <div className={styles.columnItems}>
            <div
              className={`${styles.itemContainer} ${styles.subscribeContainer}`}
            >
              <input
                placeholder="ivanov@mail.com"
                className={styles.inputMail}
              />
              <button className={styles.buttonSubscribeMail}>
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
