import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLink, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const SocialLink = ({ type, link }) => {
  if (type === "twitter") {
    return (
      <Anchor
        href={twitterUrlStart + link}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <FaTwitter />
        <span>{`@${link}`}</span>
      </Anchor>
    );
  }
  if (type === "instagram") {
    return (
      <Anchor
        href={instagramUrlStart + link}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <RiInstagramFill />
        <span>{`${link}`}</span>
      </Anchor>
    );
  }

  if (type === "facebook") {
    return (
      <Anchor
        href={facebookUrlStart + link}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <FaFacebook />
        <span>{`@${link}`}</span>
      </Anchor>
    );
  }

  if (type === "youtube") {
    return (
      <Anchor
        href={youtubeUrlStart + link}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <FaYoutube />
        <span>{`YouTube Channel`}</span>
        {/* <span>{`${link}`}</span> */}
      </Anchor>
    );
  }

  if (type === "website") {
    return (
      <Anchor href={link} target={"_blank"} rel="noreferrer noopener">
        <FaLink />
        <span>{shortenedWebAddress(link)}</span>
      </Anchor>
    );
  }

  return null;
};

export const youtubeUrlStart = "https://www.youtube.com/channel/";
export const instagramUrlStart = "https://www.instagram.com/";
export const facebookUrlStart = "https://www.facebook.com/";
export const twitterUrlStart = "https://twitter.com/";
export const shortenedWebAddress = (url) => url.split("//")[1];

const Anchor = styled.a`
  padding: 0 10px;
  color: #555;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    padding-top: 2px;
    width: 18px;
    height: auto;
    color: #333;
  }
`;
