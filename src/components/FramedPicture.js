import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

export const FramedPicture = ({ pictureWidth = 700, photo, dir }) => {
  const aspectRatio = photo.aspectRatio;
  const height = pictureWidth * aspectRatio;
  const baseDir = `/img/${dir}/`;

  return (
    <Frame maxWidth={pictureWidth}>
      <Image
        width={pictureWidth}
        height={height}
        placeholder={`${baseDir}tiny/${photo.file}`}
        src={`${baseDir}large/${photo.file}`}
        sizes={`(max-width: ${pictureWidth}px) 100vw, ${pictureWidth}px`}
        srcSetData={{
          srcSet: `${baseDir}small/${photo.file} 300w,
            ${baseDir}medium/${photo.file} 800w,
            ${baseDir}large/${photo.file} 1400w`,
          sizes: `(max-width: ${pictureWidth}px) 100vw, ${pictureWidth}px`,
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
  border-top-color: rgb(80, 80, 80); // lightest
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(40, 40, 40);
  border-bottom-color: rgb(20, 20, 20); // darkest
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
