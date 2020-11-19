//https://hackernoon.com/react-progressive-with-lazy-loading-images-a-how-to-guide-0ki732kb
//https://medium.com/@sanishkr/react-progressive-graceful-image-c7a45b577f5f

import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import styled from "styled-components";

export const Image = ({
  width = 414,
  height = 184,
  srcSetData,
  src,
  placeholder,
  alt = "Image",
}) => {
  return (
    <div style={{ maxWidth: width, maxHeight: height }}>
      {/*  <Container>
        <CanvasShadow />
        <Content> */}
      <ImageParent
        style={{
          paddingBottom: (height / width) * 100 + "%",
        }}
      >
        <CanvasShadow />
        <ProgressiveImage
          srcSetData={{
            srcSet: srcSetData.srcSet,
            sizes: srcSetData.sizes,
          }}
          src={src}
          placeholder={placeholder}
        >
          {(src, loading, srcSetData) => {
            return !placeholder ? (
              loading ? (
                <PlcHolder
                  src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'200' height%3D'150' viewBox%3D'0 0 200 150'%2F%3E"
                  w={width}
                  h={height}
                />
              ) : (
                <StyledImage
                  srcSet={srcSetData.srcSet}
                  sizes={srcSetData.sizes}
                  src={src}
                  alt={alt}
                />
              )
            ) : (
              <StyledImage
                srcSet={srcSetData.srcSet}
                style={{ filter: loading ? "blur(15px)" : "blur(0px)" }}
                sizes={srcSetData.sizes}
                src={src}
                alt={alt}
              />
            );
          }}
        </ProgressiveImage>
      </ImageParent>
      {/* </Content>
      </Container> */}
    </div>
  );
};

const PlcHolder = styled.img`
  background: linear-gradient(
    to right,
    rgb(246, 247, 248) 0%,
    rgb(237, 238, 241) 20%,
    rgb(246, 247, 248) 40%,
    rgb(246, 247, 248) 100%
  );
  @keyframes placeHolderShimmer {
    0% {
      background-position: top right;
    }
    100% {
      background-position: top left;
    }
  }
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  background-size: 2250px 2250px !important;
  background-repeat: no-repeat !important;
  background-position: 0 0 !important;
  animation: placeHolderShimmer 1.5s ease-in-out infinite;
`;
const ImageParent = styled.div`
  position: relative;
  width: 100%;
`;
const StyledImage = styled.img`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

const CanvasShadow = styled.img`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
