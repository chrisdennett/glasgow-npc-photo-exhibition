import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { Button } from "../components/Button";
// import { FramedPicture } from "../components/FramedPicture";
import { exhibitionData } from "../data/exhibitionData";
import { GalleryFooter } from "../components/GalleryFooter";
import { Breadcrumb } from "../components/Breadcrumb";
import { GalleryHeader } from "../components/GalleryHeader";
import { Boop } from "../components/Boop";

export const Gallery = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onEnterGallery = (artworkIndex) => {
    navigate(`/${galleryId}/${artworkIndex | 0}`);
  };

  return (
    <Page>
      <Breadcrumb trail={[{ to: "/", label: "Home" }]} />

      <GalleryHeader style={{ flex: 1 }}>
        <h1>{currData.photographer}</h1>
        <p>{currData.intro}</p>
        <Boop>
          <Button onClick={onEnterGallery}>ENTER55</Button>
        </Boop>
      </GalleryHeader>
      <GalleryFooter />
    </Page>
  );
};

const Page = styled.div`
  text-align: left;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
