import React from "react";
import styled from "styled-components";

export const GalleryFooter = ({ windowSize }) => {
  const skirtingHeight = windowSize.height ? windowSize.height * 0.04 : 60;
  return (
    <div>
      <SkirtingBoard skirtingHeight={skirtingHeight} />
      <Footer />
    </div>
  );
};

const Footer = styled.footer`
  min-height: 60px;
  background: url("/img/bgs/parquet_angled.png");
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4) inset;
`;

const SkirtingBoard = ({ skirtingHeight }) => {
  const boardHeight = skirtingHeight * 0.8;
  const topHeight = skirtingHeight - boardHeight;
  const topStyle = { height: topHeight };
  const boardStyle = { height: boardHeight };

  return (
    <div>
      <BoardTop style={topStyle}></BoardTop>
      <Board style={boardStyle}></Board>
    </div>
  );
};

const BoardTop = styled.div`
  height: 9px;
  border-top: 1px solid rgba(0, 0, 0, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: rgb(100, 100, 100);
  background: linear-gradient(
    to bottom,
    rgb(210, 210, 210) 0%,
    rgb(190, 190, 190) 50%,
    rgb(120, 120, 120) 100%
  );
`;

const Board = styled.div`
  height: 30px;
  background: rgb(100, 100, 100);
  background: linear-gradient(
    to bottom,
    rgb(210, 210, 210) 0%,
    rgb(190, 190, 190) 20%,
    rgb(100, 100, 100) 100%
  );
`;
