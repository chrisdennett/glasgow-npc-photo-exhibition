import { Link } from "@reach/router";
import React from "react";
import styles from "./sideMenu.module.css";

export const SideMenu = ({ isOpen, onClose }) => {
  const visibility = isOpen ? styles.show : styles.hide;

  return (
    <div className={`${styles.flyoutMenu} ${visibility}`} onClick={onClose}>
      <p>Can you spot the item that doesn't belong?</p>
      <ul>
        <Link to={"/"}>HOME</Link>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>Sit</li>
        <li>Bumblebees</li>
        <li>Aenean</li>
        <li>Consectetur</li>
      </ul>
    </div>
  );
};
