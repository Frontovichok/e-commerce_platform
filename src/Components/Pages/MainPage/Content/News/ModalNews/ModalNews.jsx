import React from "react";
import { Image, Modal } from "semantic-ui-react";
import styles from "./ModalNews.module.css";

function ModalNews(props) {
  const news = props.news;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={props.button}
    >
      <Modal.Header>Последние события</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="massive" src={news.img} wrapped />
        <Modal.Description>
          <p className={styles.name}>{news.name}</p>
          <p className={styles.description}>{news.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button className={styles.btnClose} onClick={() => setOpen(false)}>
          Закрыть
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalNews;
