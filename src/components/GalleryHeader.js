import React from "react";
import styled from "styled-components";
import { NpcLogo } from "../NpcLogo";
import ExternalLink from "./ExternalLink";

export const GalleryHeader = () => {
  return (
    <Header>
      <StyledNpcLogo />
      <h1>Glasgow National Park City</h1>
      <h2>Photo Exhibition</h2>
      <p>
        Some intro blurb about the NPC project should go in here introducing
        this photo exhibition with a link:{" "}
        <ExternalLink
          url="https://www.glasgownationalparkcity.org/"
          label="
        Glasgow National Park City Project"
        />
      </p>
    </Header>
  );
};

const StyledNpcLogo = styled(NpcLogo)`
  margin-bottom: 30px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: 60px 10px 0 10px;

  h1 {
    color: rgba(0, 0, 0, 0.7);
    font-size: calc(24px + 2vmin);
    line-height: 1em;
    /* font-size: 1.7em; */
    margin: 0;
    letter-spacing: 1px;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    /* font-family: "Londrina Sketch", cursive; */
    /* font-family: "Big Shoulders Stencil Display", cursive; */
  }

  h2 {
    margin: 0;
    letter-spacing: 5px;
    font-size: calc(10px + 2vmin);
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    padding-bottom: 20px;
  }

  p {
    max-width: 760px;
    text-align: left;
  }
`;
