import React from "react";
import styled from "styled-components";
import { NpcLogo } from "./NpcLogo";

export const GalleryHeader = ({ children, style }) => {
  return (
    <Header style={style}>
      <StyledNpcLogo />
      {children}
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
    max-width: 800px;
    text-align: left;
  }
`;
