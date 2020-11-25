import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { Button } from "../components/Button";
// import { FramedPicture } from "../components/FramedPicture";
import { exhibitionData } from "../data/exhibitionData";
import { GalleryFooter } from "../components/GalleryFooter";
import { Breadcrumb } from "../components/Breadcrumb";
import { GalleryHeader } from "../components/GalleryHeader";
import { Boop } from "../components/Boop";

export const Gallery = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  const onEnterGallery = (artworkIndex) => {
    navigate(`/${galleryId}/${artworkIndex | 0}`);
  };

  return (
    <Page>
      <Breadcrumb trail={[{ to: "/", label: "Home" }]} />

      <GalleryHeader style={{ flex: 1 }}>
        <h1>{currData.photographer}</h1>
        <p>{currData.intro}</p>
        <Boop>
          <Button onClick={onEnterGallery}>ENTER</Button>
        </Boop>
      </GalleryHeader>
      {/* <Thumbs>
        {currData.photos.map((photo, index) => (
          <Thumb key={photo.file} onClick={() => onEnterGallery(index)}>
            <Boop>
              <FramedPicture
                width={300}
                photo={photo}
                dir={currData.directory}
              />
            </Boop>
          </Thumb>
        ))}
      </Thumbs> */}
      <GalleryFooter />
    </Page>
  );
};

// const Thumb = styled.div`
//   width: 300px;
//   padding: 1.5%;
//   cursor: pointer;
// `;

// const Thumbs = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

const Page = styled.div`
  text-align: left;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
