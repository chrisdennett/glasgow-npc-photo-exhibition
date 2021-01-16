import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

export const FramedPicture = ({
  pictureWidth = 700,
  maxHeight,
  currArtwork,
  dir,
}) => {
  let width = pictureWidth;
  let height = pictureWidth * currArtwork.wToHRatio;

  if (maxHeight && height > maxHeight) {
    height = maxHeight;
    width = height * currArtwork.hToWRatio;
  }

  const baseDir = `/img/${dir}/`;

  return (
    <Frame maxWidth={width}>
      <Image
        width={width}
        height={height}
        placeholder={`${baseDir}tiny/${currArtwork.file}`}
        src={`${baseDir}large/${currArtwork.file}`}
        sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        srcSetData={{
          srcSet: `${baseDir}small/${currArtwork.file} 300w,
            ${baseDir}medium/${currArtwork.file} 800w,
            ${baseDir}large/${currArtwork.file} 1400w`,
          sizes: `(max-width: ${width}px) 100vw, ${width}px`,
        }}
      />
    </Frame>
  );
};

const Frame = styled.div`
  max-width: ${(props) => props.maxWidth}px;
  width: 100%;
  background-color: whitesmoke; // mount colour
  border: solid 1.2vmin #eee;
  border-top-color: rgb(40, 40, 40); // lightest
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(20, 20, 20);
  border-bottom-color: rgb(10, 10, 10); // darkest
  border-radius: 2px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  padding: 2.1vmin;
  position: relative;
  text-align: center;

  img {
    border: solid 1px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    max-height: 100%;
    max-width: 100%;
  }
`;
