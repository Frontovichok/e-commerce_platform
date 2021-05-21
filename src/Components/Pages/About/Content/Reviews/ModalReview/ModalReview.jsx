import React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { Image, Modal } from "semantic-ui-react";
import styles from "./ModalReview.module.css";

function ModalReview(props) {
  const review = props.review;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={props.button}
    >
      <Modal.Header>Отзыв клиента</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="massive" src={review.avatar} wrapped />
        <Modal.Description>
          <p className={styles.name}>{review.name}</p>
          <p>{review.data}</p>
          <div className={styles.rating}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={review.rating} readOnly />
            </Box>
          </div>
          <p className={styles.description}>{review.description}</p>
          {review.images.map((image, i) => (
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

export default ModalReview;
