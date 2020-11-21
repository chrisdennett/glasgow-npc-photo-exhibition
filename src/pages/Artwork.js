import React from "react";
import { Link, navigate } from "@reach/router";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { exhibitionData } from "../data/exhibitionData";
import { Room } from "../components/Room";

export const Artwork = ({ galleryId, artworkId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onPrevClick = (e) => {
    const currIndex = parseInt(artworkId);

    navigate(`/${galleryId}/${currIndex - 1}`);
  };

  const onNextClick = (e) => {
    const currIndex = parseInt(artworkId);

    navigate(`/${galleryId}/${currIndex + 1}`);
  };

  console.log("artworkId: ", artworkId);

  return (
    <Page>
      <Breadcrumb>
        <Link to={"/"}>HOME</Link>
        <Link to={`/${galleryId}`}>gallery</Link>
      </Breadcrumb>
      <PrevButton onClick={onPrevClick}>PREV</PrevButton>
      <NextButton onClick={onNextClick}>NEXT</NextButton>
      <SliderThing
        slideIndex={parseInt(artworkId)}
        dir={currData.directory}
        photos={currData.photos}
      />
    </Page>
  );
};

const SliderThing = ({ slideIndex, dir, photos }) => {
  return (
    <Carousel
      selectedItem={slideIndex}
      // onChange={onSlideChange}
      // className="presentation-mode"
      useKeyboardArrows={true}
      autoPlay={false}
      stopOnHover={false}
      infiniteLoop={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      swipeable={false}
      dynamicHeight={false}
      emulateTouch={false}
    >
      {photos.map((photo) => (
        <Room key={photo.file} photo={photo} dir={dir} />
      ))}
    </Carousel>
  );
};

const PrevButton = styled.button`
  position: fixed;
  height: 100vh;
  z-index: 998;
  padding: 20px;
  left: 0;
`;
const NextButton = styled.button`
  position: fixed;
  height: 100vh;
  z-index: 998;
  padding: 20px;
  right: 0;
`;

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
