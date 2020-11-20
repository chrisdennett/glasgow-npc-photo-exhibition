import { navigate } from "@reach/router";
import styled from "styled-components";
import { GalleryHeader } from "../components/GalleryHeader";
import { GalleryIntroCard } from "../components/GalleryIntroCard";

export const Home = () => {
  const onGalleryOpen = (galleryId) => {
    navigate(`/gallery/${galleryId}`);
  };

  return (
    <>
      <GalleryHeader />

      <Cards>
        <GalleryIntroCard onOpen={onGalleryOpen} galleryId="john-doe" />
        <GalleryIntroCard onOpen={onGalleryOpen} galleryId="john-snow" />
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
