import { navigate } from "@reach/router";
import styled from "styled-components";
import { GalleryFooter } from "../components/GalleryFooter";
import { GalleryHeader } from "../components/GalleryHeader";
import { GalleryIntroCard } from "../components/GalleryIntroCard";
import { exhibitionData } from "../data/exhibitionData";
import { ExternalLink } from "../components/ExternalLink";

export const Home = () => {
  const onGalleryOpen = (galleryId) => {
    navigate(`/${galleryId}/0`);
  };

  return (
    <>
      <GalleryHeader>
        <h1>Glasgow National Park City</h1>
        <h2>Photo Exhibition</h2>
        <p>
          Some intro blurb about the NPC project should go in here introducing
          this photo exhibition with a link:{" "}
          <ExternalLink
            url="https://www.glasgownationalparkcity.org/"
            label="
        Glasgow National Park City Project"
          />
        </p>
      </GalleryHeader>
      <Cards>
        {exhibitionData.galleries.map((gallery) => (
          <GalleryIntroCard
            key={gallery.galleryId}
            onOpen={onGalleryOpen}
            gallery={gallery}
          />
        ))}
      </Cards>

      <GalleryFooter />
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;
