import React from "react";
import styled from "styled-components";
import { getImgSrc } from "../helpers/helpers";
import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

export const GalleryIntroCard = ({ onOpen, gallery, focusedRoom }) => {
  const { directory, photos, pictureOnLeft, photographer } = gallery;
  const imgSrc = getImgSrc(directory, photos[0], "small");

  const isFocused = focusedRoom && focusedRoom === gallery.galleryLetter;
  const offset = pictureOnLeft ? -15 : 15;

  return (
    <Card
      animate={{ x: isFocused ? offset : 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
      onClick={() => onOpen(gallery.galleryId)}
      pictureOnLeft={pictureOnLeft}
    >
      <TextSide pictureOnLeft={pictureOnLeft}>
        <div>
          <p>Gallery {gallery.galleryLetter}</p>
          <h3>{gallery.photographer}</h3>
        </div>
        <Butt>
          <FaCamera />
        </Butt>
      </TextSide>

      <img src={imgSrc} alt={`${photographer} example artwork`} />
    </Card>
  );
};

const TextSide = styled.div`
  text-align: ${(props) => (props.pictureOnLeft ? "right" : "left")};
  align-items: flex-start;
  align-items: ${(props) => (props.pictureOnLeft ? "flex-end" : "flex-start")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 0 0 5px 0;
    font-size: calc(10px + 0.5vmin);
  }

  p {
    margin: 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Card = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: ${(props) => (props.pictureOnLeft ? "row-reverse" : "row")};
  justify-content: space-between;
  margin-bottom: 5px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
  width: 315px;
  overflow: hidden;

  img {
    max-height: 100px;
    width: 100px;
    object-fit: cover;
    margin-right: -2px;
    margin-left: -2px;
  }
`;

const Butt = styled.div`
  background: #ce7c41;
  color: white;
  padding: 4px 5px;
  border-radius: 50%;
  font-weight: bold;
  margin: 0;
`;
