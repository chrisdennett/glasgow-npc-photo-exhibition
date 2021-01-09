import React from "react";
import styled from "styled-components";

const options = [
  "woman-standing-1-darker_179x450.png",
  "people-walking-1-darker_336x440.png",
  "people-sitting-1.png",
  "man-1.png",
  "woman-2.png",
  "woman-3.png",
];

export const PeopleAndProps = ({ windowSize }) => {
  const maxHeight = windowSize.height ? windowSize.height / 2.3 : 500;

  return (
    <>
      <PersonImg
        height={maxHeight}
        src={"/img/exhibit-props/woman-standing-1-darker_179x450.png"}
      />
      <PersonImg
        style={{ left: 0 }}
        height={maxHeight}
        src={"/img/exhibit-props/people-walking-1-darker_336x440.png"}
      />
    </>
  );
};

const PersonImg = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
`;
