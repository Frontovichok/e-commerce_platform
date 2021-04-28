import React, { useEffect } from "react";
import styles from "./PopUpWindow.module.css";
import SalePopUp from "./SalePopUp/SalePopUp";

function PopUpWindow() {
  const popUpButton = React.createRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      popUpButton.current.click();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.popUpButton}>
      <SalePopUp
        button={
          <button ref={popUpButton} className={styles.continueRead}>
            Читать полностью
          </button>
        }
        onClickHandler={() => {
          console.log("subscribe");
        }}
      />
    </div>
  );
}

export default PopUpWindow;
