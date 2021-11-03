import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import styles from "./ModalNavbar.module.css";
import { Checkbox } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";

function getCategoryNameFromLink(link, products) {
  let category = products.filter((product) => product.link === link)[0];
  return category?.name || "";
}

function ModalNavbar({ products }) {
  const [show, setShow] = useState(false);
  const [radioState, setRadioState] = useState("");
  const [kategoryLink, setKategoryLink] = useState("/");
  const [errorState, setErrorState] = useState(false);
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let categoryName = getCategoryNameFromLink(location.pathname, products);
    setRadioState(categoryName);
    setKategoryLink(location.pathname.split("/")[2]);
  }, []);

  const handleApply = () => {
    if (radioState !== "") {
      radioState !== "" && history.push(kategoryLink);
      setShow(false);
    } else {
      setErrorState(true);
    }
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className={styles.openModalContainer}>
        <Button onClick={handleShow} className={styles.btnOpenModal}>
          <Icon className={styles.listIcon} color="white" name="list" />
          &nbsp; Категории &nbsp;
          <Icon
            className={styles.arrowRightIcon}
            color="white"
            name="angle down"
          />
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        scrollable={true}
        className={styles.kategoryModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Категории &nbsp;
            <label className={`${styles.error} ${errorState && styles.active}`}>
              Выберите категорию
            </label>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.navbarItems}>
            {products.map((product, i) => (
              <Checkbox
                key={i}
                radio
                label={product.name}
                name="checkboxRadioGroup"
                value={product.name}
                checked={radioState === product.name}
                className={styles.item}
                onChange={() => {
                  setRadioState(product.name);
                  setKategoryLink(product.link);
                }}
              />
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleApply}
            className={styles.btnSaveModal}
          >
            Применить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNavbar;
