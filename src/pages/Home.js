import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { OuterRoom } from "../components/OuterRoom";
import { exhibitionData } from "../data/exhibitionData";
import { getGalleryLetter } from "../helpers/helpers";
import MuseumMap from "../components/museumMap/MuseumMap";
import { navigate } from "@reach/router";
import { GalleryCards } from "../components/galleryCards/GalleryCards";

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
      <AnimatePresence>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {!showTwoCols && (
            <>
              <GalleryCards
                galleries={allGalleries}
                onOpen={onOpen}
                onOpenInfo={onOpenInfoRoom}
                showInfoCard="start"
              />
              <MuseumMap />
            </>
          )}

          {showTwoCols && (
            <>
              <GalleryCards
                galleries={oddGalleries}
                onOpen={onOpen}
                onOpenInfo={onOpenInfoRoom}
                showInfoCard="none"
              />

              <MuseumMap />

              <GalleryCards
                galleries={evenGalleries}
                onOpen={onOpen}
                onOpenInfo={onOpenInfoRoom}
                showInfoCard="end"
              />
            </>
          )}
        </Content>
      </AnimatePresence>
    </OuterRoom>
  );
};

const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
