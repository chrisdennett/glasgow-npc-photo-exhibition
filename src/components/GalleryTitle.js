import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

export const GalleryTitle = ({ title, onClick }) => {
  return (
    <Tab onClick={onClick}>
      <h1>
        {title}{" "}
        <sup>
          <FaInfoCircle />
        </sup>
      </h1>
    </Tab>
  );
};

const Tab = styled.div`
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  h1 {
    padding: 5px 0 0 10px;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    font-size: 2.5em;
    text-transform: uppercase;
    font-family: "Big Shoulders Stencil Text", cursive;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.7);
  }

  sup {
    font-size: 0.6em;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }

  @media (max-width: 500px) {
    h1 {
      padding: 10px 0 0 10px;
      font-size: 1.6em;
    }
  }
`;
