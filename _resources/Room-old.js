import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowSize";
import { FramedPicture } from "./FramedPicture";
import { GalleryFooter } from "./GalleryFooter";

const variants = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 1000,
    opacity: 0,
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const RoomOLD = ({ photoId, galleryData, dir, onNext, onPrev }) => {
  const [page, setPage] = useState(0);
  const windowSize = useWindowSize();
  let pictureWidth = 1400;
  let showFooter = true;

  const photo = galleryData.photos[page];

  useEffect(() => {
    let newPageFromUrl = parseInt(photoId, 0);
    if (isNaN(newPageFromUrl)) newPageFromUrl = 0;

    if (page !== newPageFromUrl) {
      setPage(newPageFromUrl);
    }
  }, [photoId, page]);

  if (windowSize && windowSize.height) {
    if (windowSize.height < windowSize.width && windowSize.height < 500) {
      showFooter = false;
    }
    const floorHeight = showFooter ? 150 : 0;
    const topPadding = 30;
    const availableHeight = windowSize.height - (floorHeight + topPadding);
    const widthToFit = availableHeight * photo.hToWRatio;
    pictureWidth = widthToFit;
  }
  const paginate = (direction) => {
    direction === 1 ? onNext() : onPrev();
  };

  return (
    <AnimatePresence initial={false} custom={0}>
      <RoomOuter
        key={photo.file}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <PictureHolder>
          <FramedPicture width={pictureWidth} photo={photo} dir={dir} />
        </PictureHolder>
        {showFooter && <GalleryFooter />}
      </RoomOuter>
    </AnimatePresence>
  );
};

const RoomOuter = styled(motion.div)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PictureHolder = styled(motion.div)`
  max-height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2%;
`;
