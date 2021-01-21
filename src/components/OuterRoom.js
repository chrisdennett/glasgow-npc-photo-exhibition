import styled from "styled-components";
import { HomeHeader } from "../components/HomeHeader";
import { HomeFooter } from "../components/HomeFooter";

export const OuterRoom = ({ children }) => {
  return (
    <Page>
      <HomeHeader>
        <h1>Glasgow National Park City</h1>
        <h2>Photo Exhibition</h2>
      </HomeHeader>

      {children}

      <HomeFooter />
    </Page>
  );
};

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
`;
