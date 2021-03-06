import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import styles from "./SalePopUp.module.css";

function SalePopUp(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      size={"mini"}
      closeIcon
      open={open}
      trigger={props.button}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>Подпишись и получи скидку 5%</p>
        <input placeholder="ivanov@email.com" />
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => {
            props.onClickHandler();
            setOpen(false);
          }}
          className={styles.getDiscountButton}
        >
          <Icon name="checkmark" /> Подписаться
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default SalePopUp;
