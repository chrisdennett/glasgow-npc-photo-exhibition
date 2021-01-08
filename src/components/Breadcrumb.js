import React from "react";
// import { Link } from "@reach/router";
// import { MdArrowForward } from "react-icons/md";
import styled from "styled-components";
// import { Button } from "./Button";
import { NpcLogo } from "./NpcLogo";

export const Breadcrumb = ({ trail, goHome }) => {
  if (!trail) return null;

  return (
    <Holder>
      <Butt onClick={goHome}>
        <NpcLogo />
      </Butt>
      {/* <MdArrowForward style={{ marginLeft: 10 }} />
      {trail.map((crumb, index) => (
        <Inner key={index}>
          <Link to={crumb.to}>{crumb.label}</Link>
          {index < trail.length - 1 && <MdArrowForward />}
        </Inner>
      ))} */}
    </Holder>
  );
};

// const Inner = styled.div`
//   display: flex;
//   align-items: center;
// `;

const Butt = styled.button`
  cursor: pointer;
  background: whitesmoke;
  border-radius: 20%;
  padding: 7px 7px 3px 7px;
  border: none;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  svg {
    width: 40px;
  }
`;

const Holder = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: #ce7c41;

  a {
    padding: 20px 10px;
    color: #ce7c41;
    display: inline-block;
    text-decoration: none;
  }
`;
