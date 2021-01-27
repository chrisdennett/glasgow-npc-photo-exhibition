import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { OuterRoom } from "../components/OuterRoom";
import { exhibitionData } from "../data/exhibitionData";
import { getGalleryLetter } from "../helpers/helpers";
import MuseumMap from "../components/museumMap/MuseumMap";
import { navigate } from "@reach/router";
import { GalleryCards } from "../components/galleryCards/GalleryCards";

// generate all the gallery data from the static info
const [allGalleries, oddGalleries, evenGalleries] = getGalleryLists(
  exhibitionData
);

export const Home = ({ windowSize }) => {
  const [focusedRoom, setFocusedRoom] = useState(null);

  const onOpen = (galleryId) => navigate(`/${galleryId}/0`);
  const onOpenInfoRoom = () => navigate(`/information`);
  const onRoomSelect = (roomId) => {
    const gallery = allGalleries.find((g) => g.galleryLetter === roomId);
    navigate(`/${gallery.galleryId}/0`);
  };

  const showTwoCols = windowSize && windowSize.width > 830;

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
                focusedRoom={focusedRoom}
                galleries={allGalleries}
                onOpen={onOpen}
                onOpenInfo={onOpenInfoRoom}
                showInfoCard="start"
              />

              <MuseumMap
                focusedRoom={focusedRoom}
                setFocusedRoom={setFocusedRoom}
                onRoomSelect={onRoomSelect}
              />
            </>
          )}

          {showTwoCols && (
            <>
              <GalleryCards
                focusedRoom={focusedRoom}
                galleries={oddGalleries}
                onOpen={onOpen}
                onOpenInfo={onOpenInfoRoom}
                showInfoCard="none"
              />

              <MuseumMap
                focusedRoom={focusedRoom}
                setFocusedRoom={setFocusedRoom}
                onRoomSelect={onRoomSelect}
              />

              <GalleryCards
                focusedRoom={focusedRoom}
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

function getGalleryLists(exhibitionData) {
  console.log("exhibitionData: ", exhibitionData);
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

  return [allGalleries, oddGalleries, evenGalleries];
}

const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
