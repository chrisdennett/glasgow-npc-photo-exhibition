import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { exhibitionData } from "../data/exhibitionData";
import { Breadcrumb } from "../components/Breadcrumb";
import usePrevious from "../hooks/usePrevious";
import { Exhibit } from "../components/Exhibit";

// deals with navigation and current artwork
export const Gallery = ({ galleryId, artworkId = 0 }) => {
  const prevArtworkId = usePrevious(parseInt(artworkId, 0));

  const currGalleryData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const totalPhotos = currGalleryData.photos.length;
  let currArtworkIndex = parseInt(artworkId);
  if (currArtworkIndex > totalPhotos) currArtworkIndex = totalPhotos;
  let direction = currArtworkIndex < prevArtworkId ? -1 : 1;
  // if going from last to first force right
  if (prevArtworkId === totalPhotos && currArtworkIndex === 0) {
    direction = 1;
  }
  // if going from first to last force left
  if (prevArtworkId === 0 && currArtworkIndex === totalPhotos) {
    direction = -1;
  }

  const onPrevClick = () => {
    const newIndex = currArtworkIndex > 0 ? currArtworkIndex - 1 : totalPhotos;
    navigate(`/${galleryId}/${newIndex}`);
  };

  const onNextClick = () => {
    const newIndex = currArtworkIndex >= totalPhotos ? 0 : currArtworkIndex + 1;
    navigate(`/${galleryId}/${newIndex}`);
  };

  return (
    <Page>
      <Breadcrumb
        trail={[
          { to: "/", label: "Home" },
          { to: `/${galleryId}/0`, label: currGalleryData.photographer },
        ]}
      />
      <PrevButton onClick={onPrevClick}>
        <IoIosArrowBack />
      </PrevButton>
      <NextButton onClick={onNextClick}>
        <IoIosArrowForward />
      </NextButton>

      <Exhibit
        galleryData={currGalleryData}
        artworkIndex={currArtworkIndex}
        direction={direction}
      />
    </Page>
  );
};

const buttProps = `
  cursor: pointer;
  position: fixed;
  height: 100vh;
  z-index: 100;
  padding: 5px 15px;
  border: none;
  background: none;
  opacity: 0.8;
  outline: none;
  font-size: 24px;

  :focus {
    opacity: 1;
    border: none;
  }
  :hover {
    opacity: 1;
  }

  transition: opacity 0.5s;
}`;

const PrevButton = styled.button`
  ${buttProps}
  left: 0;
  background-image: linear-gradient(
    to right,
    rgba(50, 50, 50, 0.6),
    rgba(50, 50, 50, 0)
  );
`;
const NextButton = styled.button`
  ${buttProps}
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(50, 50, 50, 0),
    rgba(50, 50, 50, 0.6)
  );
`;

const Page = styled.div`
  text-align: left;
  min-height: 100%;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  header {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
`;
