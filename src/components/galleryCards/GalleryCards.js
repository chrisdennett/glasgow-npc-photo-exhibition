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
  focusedRoom,
  setFocusedRoom,
}) => {
  return (
    <Cards>
      {showInfoCard === "start" && (
        <RoomIntroCard
          focusedRoom={focusedRoom}
          setFocusedRoom={setFocusedRoom}
          onOpen={onOpenInfo}
          pictureOnLeft={true}
          roomType={"Information"}
          roomName={"About the gallery"}
          icon={<FaInfo />}
        />
      )}

      {galleries.map((gallery, index) => (
        <GalleryIntroCard
          index={index}
          setFocusedRoom={setFocusedRoom}
          focusedRoom={focusedRoom}
          key={gallery.galleryId}
          onOpen={onOpen}
          gallery={gallery}
        />
      ))}

      {showInfoCard === "end" && (
        <RoomIntroCard
          focusedRoom={focusedRoom}
          setFocusedRoom={setFocusedRoom}
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
