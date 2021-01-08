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
      <h2>GALLERY:</h2>
      <h1>{currData.photographer}</h1>
      <IntroText dangerouslySetInnerHTML={{ __html: currData.intro }} />
      <Button onClick={onEnterGallery}>ENTER</Button>
    </Intro>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(0, 0%, 95%);
  margin-top: 60px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 1);

  padding: 4%;

  border-top: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  /* border-left: 2px solid rgba(0, 0, 0, 0.3); */
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
`;

const IntroText = styled.div`
  margin: 0 0 20px 0;
  max-width: 800px;
  max-height: 34vh;
  overflow-y: auto;
  margin: 0 0 20px 0;
  padding: 20px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */

  background: rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;

  p {
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
