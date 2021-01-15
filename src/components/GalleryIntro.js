import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { SocialLink } from "./SocialMediaLink";

export const GalleryIntro = ({ currGalleryData, onEnterGallery }) => {
  return (
    <Outer>
      <Intro id="intro">
        <HeaderBar>
          <Title>
            <h2>GALLERY:</h2>
            <h1>{currGalleryData.photographer}</h1>
          </Title>
          <Button onClick={onEnterGallery}>ENTER</Button>
        </HeaderBar>
        <LinkBar>
          {currGalleryData.twitter && (
            <SocialLink link={currGalleryData.twitter} type={"twitter"} />
          )}
          {currGalleryData.instagram && (
            <SocialLink link={currGalleryData.instagram} type={"instagram"} />
          )}
          {currGalleryData.facebook && (
            <SocialLink link={currGalleryData.facebook} type={"facebook"} />
          )}
          {currGalleryData.website && (
            <SocialLink link={currGalleryData.website} type={"website"} />
          )}
        </LinkBar>
        <IntroText
          dangerouslySetInnerHTML={{ __html: currGalleryData.intro }}
        />
      </Intro>
    </Outer>
  );
};

const HeaderBar = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;

  button {
    margin-right: 10px;
    max-height: 55px;
  }
`;

const LinkBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0;
  margin-top: 5px;
  border-top: 1px dashed #ddd;
  svg {
    margin-right: 5px;
  }

  @media (max-width: 1034px) and (max-height: 850px) {
    justify-content: center;
    padding: 10px 0;
    a {
      span {
        display: none;
      }
    }
  }
`;

const Title = styled.div`
  @media (max-width: 1034px) and (max-height: 850px) {
    padding-left: 80px;
    padding-top: 10px;
  }
`;

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

  @media (max-width: 1034px) and (max-height: 850px) {
    align-items: flex-start;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(0, 0%, 95%);
  max-height: 96vh;
  max-width: 800px;
  margin: 0 20px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 1);

  padding: 4%;

  border-top: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  h1 {
    margin: 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5em;
    margin: 0;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1034px) and (max-height: 850px) {
    padding: 10px 0;
    margin: 0;
    min-height: calc(100vh - 20px);
    justify-content: flex-start;

    h1 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 14px;
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

  @media (max-width: 1034px) and (max-height: 850px) {
    padding: 15px;
    height: 100%;
    margin: 0 0 0 0;
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
