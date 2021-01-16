import React, { useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { exhibitionData } from "../data/exhibitionData";
import { TopBar } from "../components/TopBar";
import usePrevious from "../hooks/usePrevious";
import { Exhibit } from "../components/Exhibit";
import { GalleryIntro } from "../components/GalleryIntro";
import { SideMenu } from "../components/sideMenu/SideMenu";

export const Gallery = ({ galleryId, artworkId, windowSize }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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

  return (
    <Page>
      <TopBar
        openSideBar={() => setIsSideBarOpen(true)}
        currGalleryData={currGalleryData}
        onShowIntro={() => setShowIntro(true)}
        introShowing={showIntro}
      />

      <SideMenu
        isOpen={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      />

      {showIntro && (
        <GalleryIntro
          currGalleryData={currGalleryData}
          onEnterGallery={() => setShowIntro(false)}
        />
      )}

      {!showIntro && (
        <>
          <Exhibit
            galleryData={currGalleryData}
            artworkIndex={currArtworkIndex}
            direction={direction}
            onNext={onNextClick}
            onPrev={onPrevClick}
            windowSize={windowSize}
          />
          <nav>
            <PrevButton onClick={onPrevClick}>
              <IoIosArrowBack /> PREV
            </PrevButton>
            <NextButton onClick={onNextClick}>
              NEXT <IoIosArrowForward />
            </NextButton>
          </nav>
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

  nav {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
`;

const buttProps = `
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 60px;
  color: white;
  padding: 5px 15px;
  border: none;
  background: none;
  opacity: 0.8;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px #000;

  svg{
    height: 24px;
    width: 24px;
  }

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
`;
const NextButton = styled.button`
  ${buttProps}
`;
