import styled from "styled-components";
import { ExternalLink } from "../components/ExternalLink";
import { OuterRoom } from "../components/OuterRoom";

export const Information = () => {
  return (
    <OuterRoom>
      <Content>
        <IntroP>
          The idea of a National Park City is simple - to use the familiar idea
          of a National Park to inspire a shared vision for Glasgow, as a
          greener, healthier and wilder City where people, places and nature are
          better connected.
        </IntroP>

        <IntroP>
          To find out more about the National Park City and how you can get
          involved go to{" "}
          <ExternalLink
            url="https://www.glasgownationalparkcity.org/"
            label="
        Glasgow National Park City Project"
          />
        </IntroP>
        <IntroP>
          We invited photographers from Glasgow to share their photos in this
          online exhibition to share their inspiration for Glasgow's places and
          their potential for people and nature. We hope you enjoy it and are
          inspired to get involved.
        </IntroP>
      </Content>
    </OuterRoom>
  );
};

const Content = styled.div`
  flex: 1;
`;

const IntroP = styled.p`
  margin: 10px auto;
  text-align: center;
  max-width: 800px;
`;
