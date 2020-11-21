import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowSize";
import { FramedPicture } from "./FramedPicture";
import { GalleryFooter } from "./GalleryFooter";

export const Room = ({ photo, dir }) => {
  const windowSize = useWindowSize();
  let pictureWidth = 1400;

  if (windowSize && windowSize.height) {
    const floorHeight = 150;
    const topPadding = 30;
    const availableHeight = windowSize.height - (floorHeight + topPadding);
    const widthToFit = availableHeight * photo.hToWRatio;
    pictureWidth = widthToFit;
  }

  return (
    <RoomOuter>
      <PictureHolder>
        <FramedPicture width={pictureWidth} photo={photo} dir={dir} />
      </PictureHolder>
      <GalleryFooter />
    </RoomOuter>
  );
};

const RoomOuter = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PictureHolder = styled.div`
  max-height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2%;
`;
