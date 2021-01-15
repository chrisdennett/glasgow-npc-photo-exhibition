import styled from "styled-components";
import { GalleryHeader } from "../components/GalleryHeader";
import { GalleryIntroCard } from "../components/GalleryIntroCard";
import { exhibitionData } from "../data/exhibitionData";
import { ExternalLink } from "../components/ExternalLink";
import { Ribbon } from "../components/Ribbon";

export const Home = ({ onGalleryOpen }) => {
  const onOpen = (galleryId) => {
    onGalleryOpen(galleryId);
  };

  return (
    <>
      <GalleryHeader>
        <h1>Glasgow National Park City</h1>
        <h2>Photo Exhibition</h2>
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
      </GalleryHeader>
      <Cards>
        {exhibitionData.galleries.map((gallery) => (
          <GalleryIntroCard
            key={gallery.galleryId}
            onOpen={onOpen}
            gallery={gallery}
          />
        ))}
      </Cards>

      {/* <GalleryFooter /> */}

      <SiteFooter>
        <Ribbon />

        <p>
          ©2021{" "}
          <ExternalLink
            url="https://www.glasgownationalparkcity.org/"
            label="
        Glasgow National Park City"
          />
        </p>
        <span>
          Site by:{" "}
          <ExternalLink
            url={"https://artfly.io/chris-dennett"}
            label={"Chris Dennett"}
          />
        </span>
      </SiteFooter>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const IntroP = styled.p`
  margin: 10px 0;
  text-align: center;
  max-width: 800px;
`;

const SiteFooter = styled.div`
  background: rgba(0, 0, 0, 0.7);
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  p,
  a,
  span {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-size: 18px;
  }

  span {
    font-size: 16px;
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    p,
    a,
    span {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      font-size: 16px;
    }

    span {
      font-size: 14px;
      a {
        font-size: 14px;
      }
    }
  }
`;
