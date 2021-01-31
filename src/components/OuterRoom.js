import styled from "styled-components";
import { HomeHeader } from "../components/HomeHeader";
import { HomeFooter } from "../components/HomeFooter";
import { ExternalLink } from "./ExternalLink";

export const OuterRoom = ({ children }) => {
  return (
    <Page>
      <TopLink>
        <ExternalLink
          url="https://www.glasgownationalparkcity.org/"
          label="
        Glasgow National Park City Main Site"
        />
      </TopLink>

      <HomeHeader />

      {children}

      <HomeFooter />
    </Page>
  );
};

const TopLink = styled.div`
  background: #ce7c41;
  position: absolute;
  padding: 5px 10px;
  border-radius: 10px;
  top: 5px;
  right: 5px;
  a {
    color: white;
  }

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Page = styled.div`
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.3)
    ),
    url("/img/bgs/brickwall.png");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
