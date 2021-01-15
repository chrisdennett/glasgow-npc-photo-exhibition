import React from "react";
import styled from "styled-components";

export const Plaque = ({ plaque, galleryData }) => {
  if (!plaque) return null;

  console.log("galleryData: ", galleryData);

  const [title, subtitle] = plaque.split("-");

  return (
    <Outer>
      <h1>{title}</h1>
      {subtitle && <h2>- {subtitle}</h2>}
      <h3>{galleryData.photographer}</h3>
    </Outer>
  );
};

const Outer = styled.div`
  background: whitesmoke;
  padding: 10px 20px;
  margin: 10px;
  background: hsl(0, 0%, 95%);

  box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  border-top: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  font-weight: 200;
  font-family: "Poppins", sans-serif;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: normal;
  }

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }

  h3 {
    margin: 10px 0 0 0;
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
    text-align: right;
  }

  @media (max-width: 700px) {
    position: absolute;
    display: none;
  }
`;
