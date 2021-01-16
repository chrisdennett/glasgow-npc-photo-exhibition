import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./footerNav.module.css";

export const FooterNav = ({ onPrev, onNext, plaque }) => {
  return (
    <div className={styles.footer}>
      {plaque && <div className={styles.plaqueText}>{plaque}</div>}
      <nav className={styles.footerNav}>
        <button className={styles.butt} onClick={onPrev}>
          <IoIosArrowBack /> PREV
        </button>
        <button className={styles.butt} onClick={onNext}>
          NEXT <IoIosArrowForward />
        </button>
      </nav>
    </div>
  );
};
