import styled from "styled-components";
import Select from "react-select";
import { Image } from "./components/Image";
import { useState } from "react";

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
  const [currBg, setCurrBg] = useState(bgOptions[1]);

  return (
    <Container bg={currBg ? `url(/img/bgs/${currBg.img})` : ""}>
      <Select
        options={bgOptions}
        value={currBg}
        onChange={(s) => setCurrBg(s)}
      />

      <header>
        <h1>Glasgow National Park City Photo Exhibition</h1>
        <h2>
          <a href="https://www.glasgownationalparkcity.org/">
            Glasgow National Park City
          </a>
        </h2>
      </header>

      <main>
        <PictureHolder>
          <Frame>
            <Image
              width={700}
              height={467}
              placeholder="/img/photographer-1/tiny/pic-01.jpg"
              src="/img/photographer-1/medium/pic-01.jpg"
              sizes="(max-width: 700px) 100vw, 700px"
              srcSetData={{
                srcSet: `/img/photographer-1/small/pic-01.jpg 250w,
                  /img/photographer-1/medium/pic-01.jpg 800w`,
                sizes: "(max-width: 700px) 100vw, 700px",
              }}
            />
          </Frame>
        </PictureHolder>
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  background-color: whitesmoke;
  background: ${(props) => (props.bg ? props.bg : "whitesmoke")};
  min-height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    padding: 20px;

    h1,
    h2 {
      margin: 0;
    }
  }

  main {
    padding-bottom: 60px;
  }

  a {
    color: #61dafb;
  }
`;

const PictureHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 700px;
  /* height: 495px; */
  background-color: whitesmoke; // mount colour
  border: solid 1.2vmin #eee;
  border-top-color: rgb(80, 80, 80); // lightest
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(40, 40, 40);
  border-bottom-color: rgb(20, 20, 20); // darkest
  border-radius: 2px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  padding: 2.1vmin;
  position: relative;
  text-align: center;

  img {
    border: solid 1px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    max-height: 100%;
    max-width: 100%;
  }
`;
