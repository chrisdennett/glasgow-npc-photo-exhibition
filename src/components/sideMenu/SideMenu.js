import { Link } from "@reach/router";
import React from "react";
import styles from "./sideMenu.module.css";
import { exhibitionData } from "../../data/exhibitionData";

export const SideMenu = ({ isOpen, onClose }) => {
  const visibility = isOpen ? styles.show : styles.hide;

  const galleryLinks = exhibitionData.galleries.map((g) => {
    return {
      label: g.photographer,
      link: `/${g.galleryId}`,
    };
  });

  return (
    <div className={`${styles.flyoutMenu} ${visibility}`} onClick={onClose}>
      <div className={styles.navList}>
        <Link to={"/"}>HOME</Link>

        <h2 className={styles.menuHeader}>Photographers:</h2>

        {galleryLinks.map((l) => (
          <Link key={l.link} to={l.link}>
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
