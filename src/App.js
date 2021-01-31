import styled from "styled-components";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { Gallery } from "./pages/Gallery";
import { useWindowSize } from "./hooks/useWindowSize";
import { useState } from "react";

function App() {
  const [allowPeople, setAllowPeople] = useState(false);

  const windowSize = useWindowSize();
  const toggleAllowPeople = () => setAllowPeople((prev) => !prev);

  return (
    <Container>
      <Router style={{ flex: 1 }}>
        <Home
          path="/"
          windowSize={windowSize}
          allowPeople={allowPeople}
          toggleAllowPeople={toggleAllowPeople}
        />
        <Information path="/information" />
        <Gallery
          path="/:galleryId/:artworkId"
          windowSize={windowSize}
          allowPeople={allowPeople}
          toggleAllowPeople={toggleAllowPeople}
        />
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
