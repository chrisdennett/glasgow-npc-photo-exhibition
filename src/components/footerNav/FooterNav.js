import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./footerNav.module.css";

export const FooterNav = ({
  onPrev,
  onNext,
  plaque,
  copyright,
  totalArtworks,
  currArtworkIndex,
}) => {
  return (
    <div className={styles.footer}>
      {plaque && (
        <div className={styles.plaqueText}>
          <div>{plaque}</div>
          {copyright && <aside>© {copyright}</aside>}
        </div>
      )}

      <nav className={styles.footerNav}>
        <button className={styles.butt} onClick={onPrev}>
          <IoIosArrowBack /> PREV
        </button>
        <div className={styles.navText}>
          {currArtworkIndex + 1} of {totalArtworks}
        </div>
        <button className={styles.butt} onClick={onNext}>
          NEXT <IoIosArrowForward />
        </button>
      </nav>
    </div>
  );
};
