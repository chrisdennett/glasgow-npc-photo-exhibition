import styled from "styled-components";
import { OuterRoom } from "../components/OuterRoom";
import { GalleryIntroCard } from "../components/GalleryIntroCard";
import { exhibitionData } from "../data/exhibitionData";
import { getGalleryLetter } from "../helpers/helpers";
import MuseumMap from "../components/museumMap/MuseumMap";
import { RoomIntroCard } from "../components/RoomIntroCard";
import { navigate } from "@reach/router";
import { FaInfo } from "react-icons/fa";

export const Home = ({ windowSize }) => {
  const onOpen = (galleryId) => navigate(`/${galleryId}/0`);
  const onOpenInfoRoom = () => navigate(`/information`);

  const showTwoCols = windowSize && windowSize.width > 830;

  let oddGalleries = [];
  let evenGalleries = [];
  let allGalleries = [];

  for (let i = 0; i < exhibitionData.galleries.length; i++) {
    const g = { ...exhibitionData.galleries[i] };
    g.galleryLetter = getGalleryLetter(i);

    if (i % 2 === 0) {
      oddGalleries.push(g);
    } else {
      g.pictureOnLeft = true;
      evenGalleries.push(g);
    }

    allGalleries.push({ ...g, pictureOnLeft: true });
  }

  return (
    <OuterRoom>
      <Content>
        {!showTwoCols && (
          <>
            <Cards>
              <RoomIntroCard
                onOpen={onOpenInfoRoom}
                pictureOnLeft={true}
                roomType={"Information"}
                roomName={"About the gallery"}
                icon={<FaInfo />}
              />

              {allGalleries.map((gallery) => (
                <GalleryIntroCard
                  key={gallery.galleryId}
                  onOpen={onOpen}
                  gallery={gallery}
                />
              ))}
            </Cards>
            <MuseumMap />
          </>
        )}

        {showTwoCols && (
          <>
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

              <RoomIntroCard
                onOpen={onOpenInfoRoom}
                pictureOnLeft={true}
                roomType={"Information"}
                roomName={"About the gallery"}
                icon={<FaInfo />}
              />
            </Cards>
          </>
        )}
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
