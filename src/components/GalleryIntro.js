import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../components/Button";
import { exhibitionData } from "../data/exhibitionData";
import styled from "styled-components";

export const GalleryIntro = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onEnterGallery = () => {
    navigate(`/${galleryId}/1`);
  };

  return (
    <Intro>
      <h1>{currData.photographer}</h1>
      <IntroText>
        <p>{currData.intro}</p>
      </IntroText>
      <Button onClick={onEnterGallery}>ENTER</Button>
    </Intro>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  margin-top: 60px;

  padding: 4%;

  h1 {
    margin: 0 0 20px 0;
  }
`;

const IntroText = styled.div`
  margin: 0 0 20px 0;
  max-width: 800px;
  max-height: 37vh;
  overflow-y: auto;
  margin: 0 0 20px 0;
  padding: 20px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;

  p {
    margin: 0;
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
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
