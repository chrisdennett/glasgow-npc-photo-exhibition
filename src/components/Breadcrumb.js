import React from "react";
import { Link } from "@reach/router";
import { MdArrowForward } from "react-icons/md";
import styled from "styled-components";
import { Button } from "./Button";

export const Breadcrumb = ({ trail, goHome }) => {
  if (!trail) return null;

  return (
    <Holder>
      <Button onClick={goHome}>HOME</Button>
      <MdArrowForward style={{ marginLeft: 10 }} />
      {trail.map((crumb, index) => (
        <Inner key={index}>
          <Link to={crumb.to}>{crumb.label}</Link>
          {index < trail.length - 1 && <MdArrowForward />}
        </Inner>
      ))}
    </Holder>
  );
};

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Holder = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #ce7c41;
  /* font-weight: bold; */

  a {
    padding: 20px 10px;
    color: #ce7c41;
    display: inline-block;
    text-decoration: none;
  }
`;
