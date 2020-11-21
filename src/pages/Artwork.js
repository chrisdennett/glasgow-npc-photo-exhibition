import React from "react";
import { Link, navigate } from "@reach/router";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { exhibitionData } from "../data/exhibitionData";
import { Room } from "../components/Room";
import { Breadcrumb } from "../components/Breadcrumb";

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

  return (
    <Page>
      <Breadcrumb
        trail={[
          { to: "/", label: "Home" },
          { to: `/${galleryId}`, label: currData.photographer },
        ]}
      />
      <PrevButton onClick={onPrevClick}>
        <IoIosArrowBack />
      </PrevButton>
      <NextButton onClick={onNextClick}>
        <IoIosArrowForward />
      </NextButton>
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
