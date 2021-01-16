import React, { useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { exhibitionData } from "../data/exhibitionData";
import usePrevious from "../hooks/usePrevious";
import { Exhibit } from "../components/Exhibit";
import { GalleryIntro } from "../components/GalleryIntro";
import { GalleryHeader } from "../components/GalleryHeader";
import { FooterNav } from "../components/footerNav/FooterNav";

export const Gallery = ({ galleryId, artworkId, windowSize }) => {
  const [showIntro, setShowIntro] = useState(true);

  const prevArtworkId = usePrevious(parseInt(artworkId, 0));

  // If there's no artwork id redirect to first artwork
  if (!artworkId) {
    navigate(`/${galleryId}/0`);
    return null;
  }

  const currGalleryData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  // if the galleryId doesn't exist redirect home
  if (!currGalleryData) {
    navigate(`/`);
    return null;
  }

  const totalPhotos = currGalleryData.photos.length;
  let currArtworkIndex = parseInt(artworkId);
  if (currArtworkIndex > totalPhotos - 1) currArtworkIndex = totalPhotos - 1;
  let direction = currArtworkIndex < prevArtworkId ? -1 : 1;
  // if going from last to first force right
  if (prevArtworkId === totalPhotos - 1 && currArtworkIndex === 0) {
    direction = 1;
  }
  // if going from first to last force left
  if (prevArtworkId === 0 && currArtworkIndex === totalPhotos - 1) {
    direction = -1;
  }

  const onPrevClick = () => {
    const newIndex =
      currArtworkIndex > 0 ? currArtworkIndex - 1 : totalPhotos - 1;
    navigate(`/${galleryId}/${newIndex}`);
  };

  const onNextClick = () => {
    const newIndex =
      currArtworkIndex >= totalPhotos - 1 ? 0 : currArtworkIndex + 1;
    navigate(`/${galleryId}/${newIndex}`);
  };

  // Add gallery props to currArtwork object for convenience
  const currArtwork = {
    ...currGalleryData.photos[currArtworkIndex],
    directory: currGalleryData.directory,
    photographer: currGalleryData.photographer,
  };
  const totalArtworks = currGalleryData.photos.length;

  return (
    <Page>
      {showIntro && (
        <GalleryIntro
          currGalleryData={currGalleryData}
          onEnterGallery={() => setShowIntro(false)}
        />
      )}

      {!showIntro && (
        <>
          <GalleryHeader
            galleryName={currGalleryData.photographer}
            onShowIntro={() => setShowIntro(true)}
          />
          <Exhibit
            currArtwork={currArtwork}
            direction={direction}
            onNext={onNextClick}
            onPrev={onPrevClick}
            windowSize={windowSize}
          />

          <FooterNav
            onPrev={onPrevClick}
            onNext={onNextClick}
            plaque={currArtwork.plaque}
            totalArtworks={totalArtworks}
            currArtworkIndex={currArtworkIndex}
          />
        </>
      )}
    </Page>
  );
};

const Page = styled.div`
  text-align: left;
  min-height: 100%;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("/img/bgs/red-brick_200x200.jpg");

  header {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
`;
