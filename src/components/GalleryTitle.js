import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

export const GalleryTitle = ({ title, onClick }) => {
  return (
    <Holder onClick={onClick}>
      <Tab>
        <h2>GALLERY:</h2>
        <h1>{title}</h1>
        <FaInfoCircle />
      </Tab>
    </Holder>
  );
};

const Tab = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  position: relative;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  h1 {
    margin: 0;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1em;
    margin: 0;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.5);
  }

  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 17px;
    height: 17px;
  }

  @media (max-height: 700px) {
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 12px;
    }
  }
`;

const Holder = styled.div`
  position: fixed;
  top: 10px;
  left: 50px;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
