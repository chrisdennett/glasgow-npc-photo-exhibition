import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";

export const SocialLink = ({ type, link }) => {
  if (type === "twitter") {
    return (
      <Anchor href={twitterUrlStart + link}>
        <FaTwitter />
        <span>{`@${link}`}</span>
      </Anchor>
    );
  }
  if (type === "instagram") {
    return (
      <Anchor href={instagramUrlStart + link}>
        <FaInstagram />
        <span>{`${link}`}</span>
      </Anchor>
    );
  }

  if (type === "facebook") {
    return (
      <Anchor href={facebookUrlStart + link}>
        <FaFacebook />
        <span>{`@${link}`}</span>
      </Anchor>
    );
  }
  if (type === "website") {
    return (
      <Anchor href={facebookUrlStart + link}>
        <FaLink />
        <span>{shortenedWebAddress(link)}</span>
      </Anchor>
    );
  }

  return null;
};

export const instagramUrlStart = "https://www.instagram.com/";
export const facebookUrlStart = "https://www.facebook.com/";
export const twitterUrlStart = "https://twitter.com/";
export const shortenedWebAddress = (url) => url.split("//")[1];

const Anchor = styled.a`
  padding: 0 10px;
  color: #555;
  text-decoration: none;
`;
