import { Link } from "@reach/router";
import React from "react";
import { AiFillHome, AiFillCamera } from "react-icons/ai";
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
        <Link to={"/"}>
          <AiFillHome /> HOME
        </Link>

        <h2 className={styles.menuHeader}>Galleries:</h2>

        {galleryLinks.map((l) => (
          <Link key={l.link} to={l.link}>
            <AiFillCamera /> {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
