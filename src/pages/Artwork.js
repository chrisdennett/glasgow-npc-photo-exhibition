import React from "react";
import { navigate } from "@reach/router";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { exhibitionData } from "../data/exhibitionData";
import { Room } from "../components/Room";
import { Breadcrumb } from "../components/Breadcrumb";
import { GalleryIntro } from "../components/GalleryIntro";

export const Artwork = ({ galleryId, artworkId = 0 }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );
  const totalRooms = currData.photos.length;
  let currIndex = parseInt(artworkId);
  if (currIndex > totalRooms) currIndex = totalRooms;

  const onPrevClick = () => {
    const newIndex = currIndex > 0 ? currIndex - 1 : totalRooms;
    navigate(`/${galleryId}/${newIndex}`);
  };

  const onNextClick = () => {
    const newIndex = currIndex >= totalRooms ? 0 : currIndex + 1;
    navigate(`/${galleryId}/${newIndex}`);
  };

  const roomId = parseInt(currIndex | 0);

  return (
    <Page>
      <Breadcrumb
        trail={[
          { to: "/", label: "Home" },
          { to: `/${galleryId}/0`, label: currData.photographer },
        ]}
      />
      <PrevButton onClick={onPrevClick}>
        <IoIosArrowBack />
      </PrevButton>
      <NextButton onClick={onNextClick}>
        <IoIosArrowForward />
      </NextButton>

      {roomId === 0 && <GalleryIntro galleryId={galleryId} />}

      {roomId > 0 && (
        <Room
          key={currData.photos[roomId - 1].file}
          photo={currData.photos[roomId - 1]}
          dir={currData.directory}
        />
      )}
    </Page>
  );
};

const buttProps = `
  position: fixed;
  height: 100vh;
  z-index: 1;
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

  // ensure the carousel fills full height
  .carousel-root,
  .carousel,
  .slider-wrapper,
  .slider {
    height: 100%;
  }

  .carousel .slide {
    background: none;
  }
`;
