import React from "react";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";
import { FramedPicture } from "./FramedPicture";
import { Button } from "./Button";
import { Boop } from "./Boop";

export const GalleryIntroCard = ({ onOpen, gallery }) => {
  const excerpt = gallery.intro.slice(0, 100).concat("…");

  return (
    <div>
      <Card onClick={() => onOpen(gallery.galleryId)}>
        <h3>{gallery.photographer}</h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        <PictureHolder>
          <Boop>
            <FramedPicture
              width={300}
              maxHeight={300}
              dir={gallery.directory}
              photo={gallery.photos[0]}
            />
          </Boop>
        </PictureHolder>

        <Butt>
          Open Gallery <BiRightArrow />
        </Butt>
      </Card>
    </div>
  );
};

const PictureHolder = styled.div`
  width: 100%;
  padding: 20px 0 20px 0;
  text-align: center;
`;

const Card = styled.div`
  cursor: pointer;
  text-align: left;
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

const Butt = styled(Button)`
  align-self: flex-end;
  margin-top: 0px;
  svg {
    margin-left: 7px;
  }
`;
