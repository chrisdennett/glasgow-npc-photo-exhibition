import React from "react";
import styled from "styled-components";
import { GalleryTitle } from "./GalleryTitle";

export const GalleryHeader = ({ onShowIntro, galleryName = "TESTING" }) => {
  return (
    <TitleHolder>
      <GalleryTitle title={galleryName} onClick={onShowIntro} />
    </TitleHolder>
  );
};

const TitleHolder = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 10px 0 0 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
`;
