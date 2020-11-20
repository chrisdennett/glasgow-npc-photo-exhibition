import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

// w: 467

export const FramedPicture = ({ width = 700, aspectRatio = 0.67 }) => {
  const height = width * aspectRatio;

  return (
    <Frame maxWidth={width}>
      <Image
        width={width}
        height={height}
        placeholder="/img/photographer-1/tiny/pic-01.jpg"
        src="/img/photographer-1/large/pic-01.jpg"
        sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        srcSetData={{
          srcSet: `/img/photographer-1/small/pic-01.jpg 300w,
                  /img/photographer-1/medium/pic-01.jpg 800w,
                  /img/photographer-1/large/pic-01.jpg 1400w`,
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
