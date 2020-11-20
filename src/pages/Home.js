import { navigate } from "@reach/router";
import styled from "styled-components";
import { GalleryHeader } from "../components/GalleryHeader";
import { GalleryIntroCard } from "../components/GalleryIntroCard";
import { exhibitionData } from "../data/exhibitionData";

export const Home = () => {
  const onGalleryOpen = (galleryId) => {
    navigate(`/${galleryId}`);
  };

  return (
    <>
      <GalleryHeader />

      <Cards>
        {exhibitionData.galleries.map((gallery) => (
          <GalleryIntroCard
            key={gallery.galleryId}
            onOpen={onGalleryOpen}
            gallery={gallery}
          />
        ))}
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;
