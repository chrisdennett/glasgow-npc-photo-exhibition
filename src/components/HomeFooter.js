import React from "react";
import styled from "styled-components";
import { ExternalLink } from "./ExternalLink";
import GalleryDoor from "./GalleryDoor";

export const HomeFooter = () => {
  return (
    <FooterOuter>
      <SkirtingBoard />

      <RightDoor>
        <GalleryDoor />
      </RightDoor>
      <LeftDoor>
        <GalleryDoor />
      </LeftDoor>

      <Footer>
        <div>
          <span>©2021 </span>
          <StyledExternalLink
            url="https://www.glasgownationalparkcity.org/"
            label="
        Glasgow National Park City"
          />
        </div>
        <div>
          <span>Site by: </span>
          <StyledExternalLink
            url={"https://artfly.io/chris-dennett"}
            label={"Chris Dennett"}
          />
        </div>
      </Footer>
    </FooterOuter>
  );
};

const FooterOuter = styled.div`
  position: relative;
`;

const RightDoor = styled.div`
  position: absolute;
  bottom: 97px;
  right: -150px;

  @media (max-width: 1295px) {
    display: none;
  }
`;

const LeftDoor = styled.div`
  position: absolute;
  bottom: 97px;
  left: -150px;

  @media (max-width: 1295px) {
    display: none;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: white;
`;

const Footer = styled.footer`
  min-height: 60px;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("/img/bgs/parquet_angled.png");
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.9) inset;
  padding: 20px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.7);

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;

const SkirtingBoard = () => {
  return (
    <Outer>
      <BoardTop />
      <Board />
    </Outer>
  );
};

const Outer = styled.div``;

const BoardTop = styled.div`
  height: 8px;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  background: rgb(200, 200, 200);

  background: linear-gradient(
    to bottom,
    rgb(220, 220, 220) 0%,
    rgb(200, 200, 200) 50%,
    rgb(140, 140, 140) 100%
  );
`;

const Board = styled.div`
  height: 30px;
  background: rgb(100, 100, 100);
  background: linear-gradient(
    to bottom,
    rgb(200, 200, 200) 0%,
    rgb(180, 180, 180) 20%,
    rgb(80, 80, 80) 100%
  );
`;
