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
  onNext,
  onPrev,
}) => {
  return (
    <Outer>
      <AnimatePresence initial={false} custom={direction}>
        {!photo && (
          <PictureHolder
            showFooter={showingFooter}
            key={"intro"}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              console.log("offset: ", offset);
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                onNext();
              } else if (swipe > swipeConfidenceThreshold) {
                onPrev();
              }
            }}
          >
            <GalleryIntro galleryId={galleryData.galleryId} />
          </PictureHolder>
        )}
        {photo && (
          <PictureHolder
            key={photo.file}
            showFooter={showingFooter}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              console.log("offset: ", offset);
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                onNext();
              } else if (swipe > swipeConfidenceThreshold) {
                onPrev();
              }
            }}
          >
            <FramedPicture
              pictureWidth={pictureWidth}
              photo={photo}
              dir={galleryData.directory}
            />
          </PictureHolder>
        )}
      </AnimatePresence>
    </Outer>
  );
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

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
  bottom: ${(props) => (props.showFooter ? 130 : 0)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
