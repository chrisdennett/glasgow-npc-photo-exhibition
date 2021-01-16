import React from "react";
import styled from "styled-components";
import { NpcLogo } from "./NpcLogo";

export const TopBar = ({ openSideBar }) => {
  return (
    <Holder>
      <Butt onClick={openSideBar}>
        <NpcLogo />
      </Butt>
    </Holder>
  );
};

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 10px 0 0 10px;
  display: flex;
  align-items: flex-start;
`;

const Butt = styled.button`
  cursor: pointer;
  background: whitesmoke;
  border-radius: 20%;
  padding: 7px 7px 3px 7px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  svg {
    width: 40px;
  }
`;
