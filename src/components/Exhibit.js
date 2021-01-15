import { Artwork } from "./Artwork";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GalleryFooter } from "./GalleryFooter";
import { PeopleAndProps } from "./PeopleAndProps";
import { AnimatePresence, motion } from "framer-motion";

export const Exhibit = ({
  galleryData,
  artworkIndex,
  direction,
  onNext,
  onPrev,
  windowSize,
}) => {
  const [pictureWidth, setPictureWidth] = useState(700);
  const photo = galleryData.photos[artworkIndex];

  useEffect(() => {
    if (windowSize && windowSize.height) {
      const floorHeight = windowSize.height > 600 ? 150 : 80;
      const topPadding = windowSize.height > 600 ? 110 : 80;
      const availableHeight = windowSize.height - (floorHeight + topPadding);
      const widthToFit = availableHeight * photo.hToWRatio;
      setPictureWidth(widthToFit, photo.hToWRatio);
    }
  }, [windowSize, photo.hToWRatio]);

  const props = {
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
      const swipe = swipePower(offset.x, velocity.x);

      if (swipe < -swipeConfidenceThreshold) {
        onNext();
      } else if (swipe > swipeConfidenceThreshold) {
        onPrev();
      }
    },
  };

  return (
    <Wall>
      <>
        <AnimatePresence initial={false} custom={direction}>
          <ArtworkHolder key={photo.file} {...props}>
            <Artwork
              pictureWidth={pictureWidth}
              galleryData={galleryData}
              photo={photo}
              direction={direction}
              windowSize={windowSize}
              onNext={onNext}
              onPrev={onPrev}
            />
          </ArtworkHolder>
        </AnimatePresence>
        <PeopleAndProps windowSize={windowSize} artworkIndex={artworkIndex} />
      </>

      <FooterHolder>
        <GalleryFooter windowSize={windowSize} />
      </FooterHolder>
      <FloorShadow />
    </Wall>
  );
};

const ArtworkHolder = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wall = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("/img/bgs/red-brick_200x200.jpg");
`;

const FooterHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
