import React from "react";
// import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa";
import styled from "styled-components";
import { GalleryIntroCard } from "../GalleryIntroCard";
import { RoomIntroCard } from "../RoomIntroCard";

export const GalleryCards = ({
  galleries,
  onOpen,
  onOpenInfo,
  showInfoCard,
}) => {
  return (
    <Cards>
      {showInfoCard === "start" && (
        <RoomIntroCard
          onOpen={onOpenInfo}
          pictureOnLeft={true}
          roomType={"Information"}
          roomName={"About the gallery"}
          icon={<FaInfo />}
        />
      )}

      {galleries.map((gallery) => (
        <GalleryIntroCard
          key={gallery.galleryId}
          onOpen={onOpen}
          gallery={gallery}
        />
      ))}

      {showInfoCard === "end" && (
        <RoomIntroCard
          onOpen={onOpenInfo}
          pictureOnLeft={true}
          roomType={"Information"}
          roomName={"About the gallery"}
          icon={<FaInfo />}
        />
      )}
    </Cards>
  );
};

const Cards = styled.div`
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  margin-bottom: 50px;
`;

// const list = {
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.05,
//       duration: 0.05,
//     },
//   },
//   hidden: {
//     opacity: 0,
//     transition: {
//       when: "afterChildren",
//     },
//   },
// };

/*
 <Cards initial="hidden" animate="visible" variants={list}>
                {oddGalleries.map((gallery) => (
                  <motion.div variants={item}>
                    <GalleryIntroCard onOpen={onOpen} gallery={gallery} />
                  </motion.div>
                ))}
              </Cards>
*/
