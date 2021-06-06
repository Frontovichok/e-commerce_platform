import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ProductsGroup from "../ProductsGroup/ProductsGroup";
import styles from "./ModalNavbar.module.css";

function ModalNavbar({ products }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNavbar;
