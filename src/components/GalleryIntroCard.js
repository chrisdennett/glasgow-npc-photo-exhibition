import React from "react";
import styled from "styled-components";
// import { BiRightArrow } from "react-icons/bi";
// import { FramedPicture } from "./FramedPicture";
// import { Button } from "./Button";
// import { Boop } from "./Boop";
import { getImgSrc } from "../helpers/helpers";
import { FaCamera } from "react-icons/fa";

export const GalleryIntroCard = ({ onOpen, gallery }) => {
  // const maxCharacters = 100;
  // let excerpt = gallery.intro.slice(0, maxCharacters);
  // if (maxCharacters < gallery.intro.length) {
  //   excerpt = excerpt.concat("…");
  // }

  const { directory, photos, pictureOnLeft, photographer } = gallery;
  const imgSrc = getImgSrc(directory, photos[0], "small");

  return (
    <div>
      <Card
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
    </div>
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

const Card = styled.div`
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
