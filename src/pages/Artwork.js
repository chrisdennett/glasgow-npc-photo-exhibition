import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

export const Artwork = ({ galleryId, artworkId }) => {
  return (
    <Page>
      <Link to={"/"}>HOME</Link>
      <Link to={`/${galleryId}`}>gallery</Link>
      <h1>
        Artwork : {galleryId} {artworkId}
      </h1>
    </Page>
  );
};

const Page = styled.div`
  text-align: left;
  min-height: 100%;
  flex: 1;

  header {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
`;
