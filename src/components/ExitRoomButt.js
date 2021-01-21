import { navigate } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { ImExit } from "react-icons/im";
// import { NpcLogo } from "./NpcLogo";

export const ExitRoomButt = () => {
  const onClick = () => navigate("/");

  return (
    <Holder>
      <Butt onClick={onClick}>
        {/* <NpcLogo /> */}
        <ImExit />
      </Butt>
    </Holder>
  );
};

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 10px 0 0 10px;
  display: flex;
  align-items: flex-start;
`;

const Butt = styled.button`
  cursor: pointer;
  /* background: rgb(206, 124, 65);
  background: rgb(168, 194, 94); */
  background: rgb(114, 179, 200);
  /* height: 50px; */
  font-size: 32px;
  padding: 8px 8px 8px 4px;
  color: whitesmoke;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);

  svg {
    width: 40px;
    transform: scaleX(-1);
  }
`;
