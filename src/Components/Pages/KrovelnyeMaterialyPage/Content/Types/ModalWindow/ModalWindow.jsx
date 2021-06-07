import React from "react";
import { Image, Modal } from "semantic-ui-react";
import styles from "./ModalWindow.module.css";

function ModalWindow(props) {
  const gallery = props.gallery;
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={props.button}
    >
      <Modal.Content scrolling>
        <Modal.Description>
          <p className={styles.name}>{gallery.name}</p>
          <p className={styles.description}>{gallery.description}</p>
          {gallery.images.map((image, i) => (
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
