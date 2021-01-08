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
    <Wall>
      {showFooter && (
        <FooterHolder>
          <GalleryFooter />
        </FooterHolder>
      )}
    </Wall>
  );
};

const Wall = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("/img/bgs/red-brick_200x200.jpg");
`;

const FooterHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
