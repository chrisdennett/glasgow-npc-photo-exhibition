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
          <TextHolder>
            <IntroP>
              The idea of a National Park City is simple - to use the familiar
              idea of a National Park to inspire a shared vision for Glasgow, as
              a greener, healthier and wilder City where people, places and
              nature are better connected.
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
              We invited photographers from Glasgow to share their photos in
              this online exhibition to share their inspiration for Glasgow's
              places and their potential for people and nature. We hope you
              enjoy it and are inspired to get involved.
            </IntroP>
          </TextHolder>
        </Content>
      </AnimatePresence>
    </OuterRoom>
  );
};

const Content = styled(motion.div)`
  flex: 1;
  margin: 0 4px 42px 4px;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(0, 0%, 95%);
  max-height: 85vh;
  max-width: 800px;
  margin: 0 auto;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  padding: 4%;

  border-top: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

const IntroP = styled.p`
  margin: 10px auto;
  padding: 0 10px;
  text-align: center;
  max-width: 800px;
`;
