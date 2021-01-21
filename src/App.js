import styled from "styled-components";
import { navigate, Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { useWindowSize } from "./hooks/useWindowSize";
import { TopBar } from "./components/TopBar";
import { SideMenu } from "./components/sideMenu/SideMenu";
import { useState } from "react";
// import useSound from "use-sound";
// import ambience from "./sounds/gallery-sounds-1min.mp3";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const windowSize = useWindowSize();
  // const [play, { sound, isPlaying, stop }] = useSound(ambience);

  const onGalleryOpen = (galleryId) => {
    // if (isPlaying) {
    //   stop();
    // }

    // sound.loop(true);
    // sound.volume(0.8);
    // play();

    navigate(`/${galleryId}/0`);
  };

  const goHome = () => {
    // stop();
    navigate(`/`);
  };

  return (
    <Container>
      <TopBar
        openSideBar={() => setIsSideBarOpen(true)}
        currGalleryData={null}
      />

      <SideMenu
        isOpen={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      />

      <Router style={{ flex: 1 }}>
        <Home path="/" onGalleryOpen={onGalleryOpen} />
        <Gallery
          path="/:galleryId/:artworkId"
          goHome={goHome}
          windowSize={windowSize}
        />
        <Gallery path="/:galleryId" goHome={goHome} windowSize={windowSize} />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  background-color: whitesmoke;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
`;
