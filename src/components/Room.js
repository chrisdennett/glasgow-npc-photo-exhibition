import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowSize";
import { GalleryFooter } from "./GalleryFooter";

export const Room = () => {
  const windowSize = useWindowSize();
  let showFooter = true;
  if (windowSize.height < windowSize.width && windowSize.height < 500) {
    showFooter = false;
  }

  return (
    <RoomOuter>
      {showFooter && (
        <FooterHolder>
          <GalleryFooter />
        </FooterHolder>
      )}
    </RoomOuter>
  );
};

const RoomOuter = styled.div`
  position: relative;
  min-height: 100vh;
`;

const FooterHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
