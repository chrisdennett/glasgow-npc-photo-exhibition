import React from "react";
import { navigate } from "@reach/router";
import { Button } from "../components/Button";
import { exhibitionData } from "../data/exhibitionData";
import { GalleryHeader } from "../components/GalleryHeader";

export const GalleryIntro = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onEnterGallery = () => {
    navigate(`/${galleryId}/1`);
  };

  return (
    <GalleryHeader style={{ flex: 1 }}>
      <h1>{currData.photographer}</h1>
      <p>{currData.intro}</p>
      <Button onClick={onEnterGallery}>ENTER</Button>
    </GalleryHeader>
  );
};
