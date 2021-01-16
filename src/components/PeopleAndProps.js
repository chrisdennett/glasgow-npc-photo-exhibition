import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const PeopleAndProps = ({ windowSize, currArtwork }) => {
  const [person, setPerson] = useState(null);

  const dir = "/img/exhibit-props/";

  useEffect(() => {
    if (!windowSize || !windowSize.width) return;
    const person = getRandomPerson(windowSize);
    setPerson(person);
  }, [windowSize, currArtwork]);

  return (
    <>
      {person && (
        <PersonImg
          style={{ left: person.xPos }}
          height={person.height}
          src={dir + person.file}
        />
      )}
    </>
  );
};

// scale 1 = 2m
const options = [
  {
    file: "woman-standing-1-darker_179x450.png",
    scale: 1,
    origWidth: 179,
    origHeight: 450,
  },
  {
    file: "people-walking-1-darker_336x440.png",
    scale: 1,
    origWidth: 336,
    origHeight: 440,
  },
  {
    file: "people-sitting-1.png",
    scale: 0.65,
    origWidth: 647,
    origHeight: 418,
  },
  { file: "man-1.png", scale: 1, origWidth: 142, origHeight: 439 },
  { file: "woman-2.png", scale: 1, origWidth: 123, origHeight: 410 },
  { file: "woman-3.png", scale: 1, origWidth: 125, origHeight: 414 },
];

function getRandomPerson(windowSize) {
  let maxHeight = windowSize.height / 2.3;
  const randIndex = Math.floor(Math.random() * options.length);
  const person = options[randIndex];

  const personHeight = maxHeight * person.scale;
  const hToWRatio = personHeight / person.origHeight;
  const personWidth = person.origWidth * hToWRatio;

  const xPos = Math.random() * (windowSize.width - personWidth);

  return { ...person, height: personHeight, xPos };
}

const PersonImg = styled.img`
  position: fixed;
  bottom: 0;
  z-index: 999;
`;
