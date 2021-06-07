import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ProductsGroup from "../ProductsGroup/ProductsGroup";
import { Icon } from "semantic-ui-react";
import styles from "./ModalNavbar.module.css";

function ModalNavbar({ products }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.openModalContainer}>
        <Button onClick={handleShow} className={styles.btnOpenModal}>
          <Icon color="white" name="filter" />
          &nbsp; Категория
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Категория</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={styles.navbarItems}>
            {products.map((product, i) =>
              product.products ? (
                <ProductsGroup key={i} productsGroup={product} />
              ) : (
                <NavLink key={i} to={product.link} className={styles.item}>
                  {product.name}
                  <sup className={styles.productsCount}>4</sup>
                </NavLink>
              )
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
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
