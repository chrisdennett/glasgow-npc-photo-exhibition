import React from "react";
import styled from "styled-components";

export const GalleryFooter = () => {
  const currBg = bgOptions[0];
  return (
    <div>
      <SkirtingBoard />
      <Footer bg={`url(/img/tiles-floor/${currBg.img})`} />
    </div>
  );
};

const Footer = styled.footer`
  min-height: 60px;
  background: ${(props) => (props.bg ? props.bg : "whitesmoke")};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4) inset;
`;

const SkirtingBoard = () => {
  return (
    <div>
      <BoardTop></BoardTop>
      <Board></Board>
    </div>
  );
};

const BoardTop = styled.div`
  min-height: 9px;
  background: whitesmoke;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: rgb(220, 220, 220);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(220, 220, 220, 1) 100%
  );
`;

const Board = styled.div`
  min-height: 30px;
  background: whitesmoke;
  background: rgb(220, 220, 220);
  background: linear-gradient(
    to bottom,
    rgba(205, 205, 205, 1) 0%,
    rgba(245, 245, 245, 1) 5%,
    rgba(220, 220, 220, 1) 100%
  );
`;

const bgOptions = [
  {
    img: "parquet_400x400.jpg",
    value: "Parquet Seamless Texture #6826.jpg",
    label: "Parquet Seamless Texture #6826.jpg",
  },
  {
    img: "dark_wood.png",
    value: "dark_wood.png",
    label: "dark_wood.png",
  },
  {
    img: "floor-boards.png",
    value: "floor-boards.png",
    label: "floor-boards.png",
  },
  {
    img: "purty_wood.png",
    value: "purty_wood.png",
    label: "purty_wood.png",
  },
  {
    img: "purty_wood_@2X.png",
    value: "purty_wood_@2X.png",
    label: "purty_wood_@2X.png",
  },
  {
    img: "retina_wood.png",
    value: "retina_wood.png",
    label: "retina_wood.png",
  },
  {
    img: "retina_wood_@2X.png",
    value: "retina_wood_@2X.png",
    label: "retina_wood_@2X.png",
  },
  {
    img: "tileable_wood_texture.png",
    value: "tileable_wood_texture.png",
    label: "tileable_wood_texture.png",
  },
  {
    img: "tileable_wood_texture_@2X.png",
    value: "tileable_wood_texture_@2X.png",
    label: "tileable_wood_texture_@2X.png",
  },
  {
    img: "wood_pattern.png",
    value: "wood_pattern.png",
    label: "wood_pattern.png",
  },
  {
    img: "wood_pattern_@2X.png",
    value: "wood_pattern_@2X.png",
    label: "wood_pattern_@2X.png",
  },
  {
    img: "Wood-3.jpg",
    value: "Wood-3.jpg",
    label: "Wood-3.jpg",
  },
  {
    img: "Wood-4.jpg",
    value: "Wood-4.jpg",
    label: "Wood-4.jpg",
  },
  {
    img: "Wood-5.jpg",
    value: "Wood-5.jpg",
    label: "Wood-5.jpg",
  },
  {
    img: "Wood-6.jpg",
    value: "Wood-6.jpg",
    label: "Wood-6.jpg",
  },
  {
    img: "Wood-0209.jpg",
    value: "Wood-0209.jpg",
    label: "Wood-0209.jpg",
  },
  {
    img: "Wood-0212.jpg",
    value: "Wood-0212.jpg",
    label: "Wood-0212.jpg",
  },
  {
    img: "Wood-0229.jpg",
    value: "Wood-0229.jpg",
    label: "Wood-0229.jpg",
  },
  {
    img: "Wood-2756b.jpg",
    value: "Wood-2756b.jpg",
    label: "Wood-2756b.jpg",
  },
];
