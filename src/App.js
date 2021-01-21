import styled from "styled-components";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { Gallery } from "./pages/Gallery";
import { useWindowSize } from "./hooks/useWindowSize";
import { TopBar } from "./components/TopBar";
import { ExitRoomButt } from "./components/ExitRoomButt";

function App() {
  const windowSize = useWindowSize();

  return (
    <Container>
      <Router style={{ flex: 1 }}>
        <Home path="/" />
        <Information path="/information" />
        <Gallery path="/:galleryId/:artworkId" windowSize={windowSize} />
        <Gallery path="/:galleryId" windowSize={windowSize} />
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
