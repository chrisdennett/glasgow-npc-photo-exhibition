import styled from "styled-components";
import { Router } from "@reach/router";
import { useState } from "react";
import Select from "react-select";
import { GalleryFooter } from "./components/GalleryFooter";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Artwork } from "./pages/Artwork";

const bgOptions = [
  {
    img: "brickwall.png",
    value: "brickwall.png",
    label: "brickwall.png",
  },
  {
    img: "brickwall_@2X.png",
    value: "brickwall_@2X.png",
    label: "brickwall_@2X.png",
  },
  {
    img: "concrete_seamless.png",
    value: "concrete_seamless.png",
    label: "concrete_seamless.png",
  },
  {
    img: "concrete_wall_2.png",
    value: "concrete_wall_2.png",
    label: "concrete_wall_2.png",
  },

  {
    img: "concrete_wall_3.png",
    value: "concrete_wall_3.png",
    label: "concrete_wall_3.png",
  },
  {
    img: "concrete-texture.png",
    value: "concrete-texture.png",
    label: "concrete-texture.png",
  },
  {
    img: "old_wall.png",
    value: "old_wall.png",
    label: "old_wall.png",
  },
  {
    img: "old_wall_@2X.png",
    value: "old_wall_@2X.png",
    label: "old_wall_@2X.png",
  },
  {
    img: "smooth_wall.png",
    value: "smooth_wall.png",
    label: "smooth_wall.png",
  },
  {
    img: "smooth_wall_@2X.png",
    value: "smooth_wall_@2X.png",
    label: "smooth_wall_@2X.png",
  },
  {
    img: "vintage-concrete.png",
    value: "vintage-concrete.png",
    label: "vintage-concrete.png",
  },
  {
    img: "wall4.png",
    value: "wall4.png",
    label: "wall4.png",
  },
  {
    img: "wall4_@2X.png",
    value: "wall4_@2X.png",
    label: "wall4_@2X.png",
  },
  {
    img: "white_wall_hash.png",
    value: "white_wall_hash.png",
    label: "white_wall_hash.png",
  },
  {
    img: "white_wall_hash_@2X.png",
    value: "white_wall_hash_@2X.png",
    label: "white_wall_hash_@2X.png",
  },
];

function App() {
  const [currBg, setCurrBg] = useState(bgOptions[0]);

  return (
    <Container bg={currBg ? `url(/img/bgs/${currBg.img})` : ""}>
      <SelectHolder>
        <Select
          options={bgOptions}
          value={currBg}
          onChange={(s) => setCurrBg(s)}
        />
      </SelectHolder>

      <Router>
        <Home path="/" />
        <Gallery path="/:galleryId" />
        <Artwork path="/:galleryId/:artworkId" />
      </Router>
    </Container>
  );
}

export default App;

const SelectHolder = styled.div`
  display: none;
  position: fixed;
  top: 5px;
  right: 5px;
  width: 230px;
`;

const Container = styled.div`
  text-align: center;
  background-color: whitesmoke;
  background: ${(props) => (props.bg ? props.bg : "whitesmoke")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
`;
