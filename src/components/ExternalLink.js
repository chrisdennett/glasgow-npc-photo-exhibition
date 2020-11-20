import React from "react";
import { HiExternalLink } from "react-icons/hi";
import styled from "styled-components";

const ExternalLink = ({ url, label, newTab = "true", useIcon = "true" }) => {
  return (
    <Link href={url} target={newTab ? "_blank" : "_self"}>
      {label} {useIcon && <HiExternalLink />}
    </Link>
  );
};

export default ExternalLink;

const Link = styled.a`
  color: #a8c25e;
`;
