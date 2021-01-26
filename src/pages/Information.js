import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ExitRoomButt } from "../components/ExitRoomButt";
import { ExternalLink } from "../components/ExternalLink";
import { OuterRoom } from "../components/OuterRoom";

export const Information = () => {
  return (
    <OuterRoom>
      <ExitRoomButt />
      <AnimatePresence>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IntroP>
            The idea of a National Park City is simple - to use the familiar
            idea of a National Park to inspire a shared vision for Glasgow, as a
            greener, healthier and wilder City where people, places and nature
            are better connected.
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
            online exhibition to share their inspiration for Glasgow's places
            and their potential for people and nature. We hope you enjoy it and
            are inspired to get involved.
          </IntroP>
        </Content>
      </AnimatePresence>
    </OuterRoom>
  );
};

const Content = styled(motion.div)`
  flex: 1;
  margin-bottom: 42px;
`;

const IntroP = styled.p`
  margin: 10px auto;
  padding: 0 10px;
  text-align: center;
  max-width: 800px;
`;
