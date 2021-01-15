import React from "react";
import styled from "styled-components";
import { GalleryTitle } from "./GalleryTitle";
import { NpcLogo } from "./NpcLogo";

export const TopBar = ({
  goHome,
  currGalleryData,
  onShowIntro,
  introShowing,
}) => {
  return (
    <Holder iconOnly={introShowing}>
      <Butt onClick={goHome}>
        <NpcLogo />
      </Butt>
      {!introShowing && (
        <TitleHolder>
          <GalleryTitle
            title={currGalleryData.photographer}
            onClick={onShowIntro}
          />
        </TitleHolder>
      )}
    </Holder>
  );
};

const Holder = styled.div`
  position: fixed;
  background-image: ${(props) =>
    props.iconOnly
      ? "none"
      : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))"};
  top: 0;
  left: 0;
  right: ${(props) => (props.iconOnly ? "" : 0)};
  z-index: 999;
  padding: 10px 0 0 10px;
  display: flex;
  align-items: flex-start;
`;

const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Butt = styled.button`
  cursor: pointer;
  background: whitesmoke;
  border-radius: 20%;
  padding: 7px 7px 3px 7px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  svg {
    width: 40px;
  }
`;
