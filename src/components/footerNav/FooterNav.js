import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useKeyboardBindings } from "../../hooks/useKeyboardBindings";
import GalleryPeopleToggle from "../galleryPeopleToggle/GalleryPeopleToggle";
import styles from "./footerNav.module.css";

export const FooterNav = ({
  onPrev,
  onNext,
  plaque,
  copyright,
  totalArtworks,
  currArtworkIndex,
  toggleAllowPeople,
  allowPeople,
}) => {
  useKeyboardBindings({
    ArrowRight: () => onNext(),
    ArrowLeft: () => onPrev(),
  });

  return (
    <div className={styles.footer}>
      <div className={styles.allowPeopleToggleHolder}>
        <GalleryPeopleToggle
          textStyle={{ color: "rgba(255,255,255,0.7)" }}
          toggleAllowPeople={toggleAllowPeople}
          allowPeople={allowPeople}
        />
      </div>

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
