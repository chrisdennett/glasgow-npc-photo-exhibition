import React from "react";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";
import { FramedPicture } from "./FramedPicture";
import { Button } from "./Button";

export const GalleryIntroCard = ({ onOpen, gallery }) => {
  return (
    <Outer>
      <Card>
        <h3>{gallery.photographer}</h3>
        <p>{gallery.intro}</p>
        <Butt onClick={() => onOpen(gallery.galleryId)}>
          Open Gallery <BiRightArrow />
        </Butt>
        <PictureHolder>
          <FramedPicture width={300} />
        </PictureHolder>
      </Card>
    </Outer>
  );
};

const Outer = styled.div``;

const Card = styled.div`
  text-align: left;
  /* width: 100%; */
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.4);
  margin: 10px;
  max-width: 350px;
  padding: 30px;

  border-radius: 10px;

  h3 {
    text-transform: uppercase;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    /* color: rgba(0, 0, 0, 0.6); */
    letter-spacing: 2px;
    margin: 0 0 10px 0;
    font-size: calc(10px + 1vmin);
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: calc(12px + 0.5vmin);
  }
`;

const PictureHolder = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
`;

const Butt = styled(Button)`
  align-self: flex-end;
  margin-top: 15px;
  svg {
    margin-left: 7px;
  }
`;
