import React from "react";
import styled from "styled-components";
import { Link, navigate } from "@reach/router";
import { Button } from "../components/Button";
import { FramedPicture } from "../components/FramedPicture";
import { exhibitionData } from "../data/exhibitionData";
import { GalleryFooter } from "../components/GalleryFooter";

export const Gallery = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onEnterGallery = (artworkIndex) => {
    navigate(`/${galleryId}/${artworkIndex | 0}`);
  };

  return (
    <Page>
      <Link to={"/"}>HOME</Link>
      <header>
        <h1>{currData.photographer}</h1>
        <p>{currData.intro}</p>
        <Button onClick={onEnterGallery}>ENTER</Button>
      </header>
      <Thumbs>
        {currData.photos.map((photo, index) => (
          <Thumb key={photo.file} onClick={() => onEnterGallery(index)}>
            <FramedPicture width={300} photo={photo} dir={currData.directory} />
          </Thumb>
        ))}
      </Thumbs>
      <GalleryFooter />
    </Page>
  );
};

const Thumb = styled.div`
  width: 300px;
  padding: 1.5%;
`;

const Thumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Page = styled.div`
  text-align: left;
  flex: 1;

  header {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
`;
