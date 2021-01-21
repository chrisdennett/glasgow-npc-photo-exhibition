import React from "react";
import { HiExternalLink } from "react-icons/hi";
import styled from "styled-components";

export const ExternalLink = ({
  url,
  label,
  newTab = "true",
  useIcon = "true",
  className,
}) => {
  return (
    <Link href={url} target={newTab ? "_blank" : "_self"} className={className}>
      {label} {useIcon && <HiExternalLink />}
    </Link>
  );
};

const Link = styled.a`
  color: #ce7c41;
  text-decoration: none;
`;

/*
dark blue: #124868;
green: #a8c25e
orange: #ce7c41;
light blue: #72b3c8;
*/
