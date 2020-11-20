import React from "react";
import styled from "styled-components";
import { FramedPicture } from "./FramedPicture";
import { Button } from "./Button";

export const GalleryIntroCard = ({ onOpen }) => {
  return (
    <Outer>
      <Card>
        <h3>John Doe</h3>
        <p>
          John has been taking photos around Glasgow for 20 years. He
          particularly drawn to the plants and stuff.
        </p>
        <Butt onClick={onOpen}>Open Gallery</Butt>
        <PictureHolder>
          <FramedPicture width={300} />
        </PictureHolder>
      </Card>
    </Outer>
  );
};

const Outer = styled.div``;

const Card = styled.div`
  text-align: left;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.4);
  margin: 10px;
  max-width: 350px;
  padding: 30px;

  border-radius: 10px;

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const PictureHolder = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
`;

const Butt = styled(Button)`
  align-self: flex-end;
`;
