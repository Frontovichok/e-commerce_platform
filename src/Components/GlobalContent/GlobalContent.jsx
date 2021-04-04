import React, { Component } from 'react'
import styles from "./GlobalContent.module.css";

function GlobalContent(props) {
  return (
    <div className={styles.globalContent}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
}

export default GlobalContent;
