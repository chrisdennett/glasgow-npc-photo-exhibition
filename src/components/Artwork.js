import React from "react";
import styled from "styled-components";

import { GalleryIntro } from "./GalleryIntro";
import { FramedPicture } from "./FramedPicture";
import { motion, AnimatePresence } from "framer-motion";

export const Artwork = ({
  pictureWidth,
  galleryData,
  photo,
  direction = 1,
  showingFooter,
  showPeople,
  onNext,
  onPrev,
}) => {
  const props = {
    showFooter: showingFooter,
    custom: direction,
    variants: variants,
    initial: "enter",
    animate: "center",
    exit: "exit",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 1 },
    },
    drag: "x",
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 1,
    onDragEnd: (e, { offset, velocity }) => {
      console.log("offset: ", offset);
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        onNext();
      } else if (swipe > swipeConfidenceThreshold) {
        onPrev();
      }
    },
  };

  return (
    <Outer>
      {showingFooter && <FloorShadow />}

      <AnimatePresence initial={false} custom={direction}>
        {!photo && (
          <PictureHolder key={"intro"} {...props}>
            <GalleryIntro galleryId={galleryData.galleryId} />
          </PictureHolder>
        )}
        {photo && (
          <PictureHolder key={photo.file} {...props}>
            <FramedPicture
              pictureWidth={pictureWidth}
              photo={photo}
              dir={galleryData.directory}
            />
            {showPeople && (
              <>
                <PersonImg
                  src={"/img/exhibit-props/woman-standing-1-darker_179x450.png"}
                />
                <PersonImg
                  style={{ left: 0 }}
                  src={"/img/exhibit-props/people-walking-1-darker_336x440.png"}
                />
              </>
            )}
          </PictureHolder>
        )}
      </AnimatePresence>
    </Outer>
  );
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1900 : -1900,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1900 : -1900,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const PersonImg = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

const FloorShadow = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  right: 0;
`;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PictureHolder = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: ${(props) => (props.showFooter ? 130 : 0)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
