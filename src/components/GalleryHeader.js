import React from "react";
import styled from "styled-components";

export const GalleryHeader = () => {
  return (
    <Header>
      <h1>Glasgow National Park City Photo Exhibition</h1>
      <h2>
        <a href="https://www.glasgownationalparkcity.org/">
          Glasgow National Park City
        </a>
      </h2>
    </Header>
  );
};

const Header = styled.header`
  margin: 60px 10px;

  h1 {
    color: rgba(0, 0, 0, 0.8);
  }
`;
