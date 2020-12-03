import React from "react";
import styled from "styled-components";
import { GalleryIntro } from "../components/GalleryIntro";
import { FramedPicture } from "../components/FramedPicture";
import { motion, AnimatePresence } from "framer-motion";

export const Artwork = ({ galleryData, currArtworkIndex, direction = 1 }) => {
  // use intro on zero index
  const photo =
    currArtworkIndex > 0 ? galleryData.photos[currArtworkIndex - 1] : null;

  return (
    <Outer>
      <AnimatePresence initial={false} custom={direction}>
        {!photo && (
          <PictureHolder
            key={"intro"}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <GalleryIntro galleryId={galleryData.galleryId} />
          </PictureHolder>
        )}
        {photo && (
          <PictureHolder
            key={photo.file}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <FramedPicture
              width={700}
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
  bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
