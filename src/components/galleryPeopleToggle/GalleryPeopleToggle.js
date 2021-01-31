import React from "react";
import styled from "styled-components";
import GalleryPeopleIcon from "./GalleryPeopleIcon";

export default function GalleryPeopleToggle({
  allowPeople = true,
  toggleAllowPeople,
  textStyle,
}) {
  return (
    <Toggle>
      <span style={textStyle}>
        {allowPeople ? "Hide people" : "Show people"}:{" "}
      </span>
      <IconHolder onClick={toggleAllowPeople}>
        <GalleryPeopleIcon showBanPeople={allowPeople} />
      </IconHolder>
    </Toggle>
  );
}

const IconHolder = styled.div`
  background: #ce7c41;
  padding: 5px;
  border-radius: 50%;
  height: 35px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Toggle = styled.div`
  display: inline-flex;
  align-items: center;

  span {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.5);

    @media (max-width: 560px) {
      display: none;
    }
  }
`;
