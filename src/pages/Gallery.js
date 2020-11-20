import React from "react";
import styled from "styled-components";

export const Gallery = ({ galleryId }) => {
  return (
    <Page>
      <h1>Gallery: {galleryId}</h1>
    </Page>
  );
};

const Page = styled.div`
  min-height: 100%;
  flex: 1;
`;
