import React from "react";
import { Image, Modal } from "semantic-ui-react";
import styles from "./ModalWindow.module.css";

function ModalWindow({ button, images, title, description }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={button}
    >
      <Modal.Content scrolling>
        <Modal.Description>
          <p className={styles.name}>{title}</p>
          <p className={styles.description}>{description}</p>
          {images.map((image, i) => (
            <Image key={i} size="massive" src={image} wrapped />
          ))}
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

export default ModalWindow;
