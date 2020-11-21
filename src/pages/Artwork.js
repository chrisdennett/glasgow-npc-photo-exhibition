import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { exhibitionData } from "../data/exhibitionData";
import { Room } from "../components/Room";

export const Artwork = ({ galleryId, artworkId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  return (
    <Page>
      <Breadcrumb>
        <Link to={"/"}>HOME</Link>
        <Link to={`/${galleryId}`}>gallery</Link>
      </Breadcrumb>
      <Carousel
        styles={{ height: "100vh" }}
        autoPlay={false}
        showThumbs={false}
        infiniteLoop={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        useKeyboardArrows={true}
      >
        {currData.photos.map((photo) => (
          <Room key={photo.file} photo={photo} dir={currData.directory} />
        ))}
      </Carousel>
    </Page>
  );
};

const Breadcrumb = styled.div`
  position: fixed;
  z-index: 999;
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
