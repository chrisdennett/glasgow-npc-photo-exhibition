import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const RoomIntroCard = ({
  onOpen,
  pictureOnLeft,
  roomType,
  roomName,
  icon,
  focusedRoom,
}) => {
  console.log("focusedRoom: ", focusedRoom);
  const isFocused = focusedRoom && focusedRoom === "info";
  const offset = pictureOnLeft ? -15 : 15;

  return (
    <div>
      <Card
        animate={{ x: isFocused ? offset : 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.2,
        }}
        onClick={() => onOpen()}
        pictureOnLeft={pictureOnLeft}
      >
        <TextSide pictureOnLeft={pictureOnLeft}>
          <div>
            <p>{roomType}</p>
            <h3>{roomName}</h3>
          </div>
          <Butt>{icon}</Butt>
        </TextSide>

        <figure>INFO</figure>
      </Card>
    </div>
  );
};

const TextSide = styled.div`
  text-align: ${(props) => (props.pictureOnLeft ? "right" : "left")};
  align-items: flex-start;
  align-items: ${(props) => (props.pictureOnLeft ? "flex-end" : "flex-start")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 0 0 5px 0;
    font-size: calc(10px + 0.5vmin);
  }

  p {
    margin: 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Card = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: ${(props) => (props.pictureOnLeft ? "row-reverse" : "row")};
  justify-content: space-between;
  margin-bottom: 5px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
  width: 315px;
  overflow: hidden;

  figure {
    height: 100px;
    width: 100px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: rgb(18, 72, 104);
  }
`;

const Butt = styled.div`
  background: rgb(18, 72, 104);
  color: white;
  padding: 4px 5px;
  border-radius: 50%;
  font-weight: bold;
  margin: 0;
`;
