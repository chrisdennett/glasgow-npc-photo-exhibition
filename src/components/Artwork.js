import React from "react";
import styled from "styled-components";

import { FramedPicture } from "./FramedPicture";
import { Plaque } from "./Plaque";

export const Artwork = ({ pictureWidth, galleryData, photo }) => {
  return (
    <Outer>
      <PictureHolder>
        <FramedPicture
          pictureWidth={pictureWidth}
          photo={photo}
          dir={galleryData.directory}
        />
        {photo.plaque && (
          <Plaque plaque={photo.plaque} galleryData={galleryData} />
        )}
      </PictureHolder>
    </Outer>
  );
};

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PictureHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 5px 90px 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-height: 600px) {
    padding: 70px 5px 90px 5px;
  }
`;
