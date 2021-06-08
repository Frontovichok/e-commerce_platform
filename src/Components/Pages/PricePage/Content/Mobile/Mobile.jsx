import React, { Component } from "react";
import PriceTable from "../PriceTable/PriceTable";
import styles from "./Mobile.module.css";

export default function MenuExampleAttachedTabular() {
  return (
    <div className={styles.priceTableContainer}>
      <PriceTable />
    </div>
  );
}
