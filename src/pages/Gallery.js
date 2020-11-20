import React from "react";
import styled from "styled-components";
import { FramedPicture } from "../components/FramedPicture";
import { exhibitionData } from "../data/exhibitionData";

export const Gallery = ({ galleryId }) => {
  const currData = exhibitionData.galleries.find(
    (g) => g.galleryId === galleryId
  );

  return (
    <Page>
      <h1>{currData.photographer}</h1>
      <p>{currData.intro}</p>
      <Thumbs>
        {currData.photos.map((photo) => (
          <Thumb key={photo.file}>
            <FramedPicture width={300} photo={photo} dir={currData.directory} />
          </Thumb>
        ))}
      </Thumbs>
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
  min-height: 100%;
  flex: 1;
`;
