import styled from "styled-components";
import { OuterRoom } from "../components/OuterRoom";
import { GalleryIntroCard } from "../components/GalleryIntroCard";
import { exhibitionData } from "../data/exhibitionData";
import { getGalleryLetter } from "../helpers/helpers";
import MuseumMap from "../components/museumMap/MuseumMap";

export const Home = ({ onGalleryOpen }) => {
  const onOpen = (galleryId) => {
    onGalleryOpen(galleryId);
  };

  let oddGalleries = [];
  let evenGalleries = [];

  for (let i = 0; i < exhibitionData.galleries.length; i++) {
    const g = exhibitionData.galleries[i];
    g.galleryLetter = getGalleryLetter(i);

    if (i % 2 === 0) {
      oddGalleries.push(g);
    } else {
      g.pictureOnLeft = true;
      evenGalleries.push(g);
    }
  }

  return (
    <OuterRoom>
      <Content>
        <Cards>
          {oddGalleries.map((gallery) => (
            <GalleryIntroCard
              key={gallery.galleryId}
              onOpen={onOpen}
              gallery={gallery}
            />
          ))}
        </Cards>

        <MuseumMap />

        <Cards>
          {evenGalleries.map((gallery) => (
            <GalleryIntroCard
              key={gallery.galleryId}
              onOpen={onOpen}
              gallery={gallery}
            />
          ))}
        </Cards>
      </Content>
    </OuterRoom>
  );
};

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  margin-bottom: 50px;
`;

// const IntroP = styled.p`
//   margin: 10px 0;
//   text-align: center;
//   max-width: 800px;
// `;
