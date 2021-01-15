import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

export const GalleryTitle = ({ title, onClick }) => {
  return (
    <Holder onClick={onClick}>
      <Tab>
        {/* <h2>GALLERY:</h2> */}
        <h1>
          {title}{" "}
          <sup>
            <FaInfoCircle />
          </sup>
        </h1>
      </Tab>
    </Holder>
  );
};

const Tab = styled.div`
  width: 100%;
  margin-left: 60px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  h1 {
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    padding-top: 15px;
    font-size: 2.5em;
    text-transform: uppercase;
    font-family: "Big Shoulders Stencil Text", cursive;
    max-width: calc(100% - 60px);
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.7);
  }

  svg {
    font-size: 0.7em;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }

  @media (max-width: 500px) {
    h1 {
      padding-top: 20px;
      font-size: 1.7em;
    }
  }
`;

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
`;
