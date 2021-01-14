import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

export const GalleryIntro = ({ currGalleryData, onEnterGallery }) => {
  return (
    <Outer>
      <Intro>
        <h2>GALLERY:</h2>
        <h1>{currGalleryData.photographer}</h1>
        <IntroText
          dangerouslySetInnerHTML={{ __html: currGalleryData.intro }}
        />
        <Button onClick={onEnterGallery}>ENTER</Button>
      </Intro>
    </Outer>
  );
};

const Outer = styled.div`
  position: relative;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("/img/bgs/red-brick_200x200.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(0, 0%, 95%);
  max-height: 90%;
  max-width: 800px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 1);

  padding: 4%;

  border-top: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  h1 {
    margin: 0 0 20px 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5em;
    margin: 0;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (max-height: 700px) {
    padding: 10px 0;

    h1 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 12px;
    }
  }
`;

const IntroText = styled.div`
  margin: 0 0 20px 0;
  max-width: 800px;
  max-height: 100%;
  overflow-y: auto;
  padding: 20px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */

  background: rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;

  p {
    margin: 0 0 10px 0;
  }

  @media (max-height: 700px) {
    padding: 15px;

    margin: 0 0 10px 0;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ce7c41;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
