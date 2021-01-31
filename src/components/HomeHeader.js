import React from "react";
import styled from "styled-components";
import { NpcLogo } from "./NpcLogo";

export const HomeHeader = ({ children, style }) => {
  return (
    <Header style={style}>
      <LogoWithText>
        <NpcLogo />
        <h1>
          Glasgow
          <br /> National
          <br /> Park City
        </h1>
      </LogoWithText>
      <h2>Photo Exhibition</h2>
    </Header>
  );
};

const LogoWithText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    color: rgb(18, 72, 104);
    font-size: 32px;
    line-height: 1em;
    margin: 0;
    letter-spacing: 1px;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    padding-left: 10px;
    max-width: 170px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 10px 10px 10px;

  h2 {
    margin: 5px 0 30px 0;
    color: rgb(18, 72, 104);
    letter-spacing: 4px;
    font-size: 24px;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  }
`;
