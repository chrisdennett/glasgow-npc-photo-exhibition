import React from "react";
import styled from "styled-components";

export const Button = ({ children, className, onClick }) => {
  return (
    <Butt onClick={onClick} className={className}>
      {children}
    </Butt>
  );
};

/*
dark blue: #124868;
green: #a8c25e
orange: #ce7c41;
light blue: #72b3c8;
*/

const Butt = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  text-transform: uppercase;
  /* border: 3px solid #a8c25e; */
  background: #ce7c41;
  border: none;
  color: white;
  border-radius: 5px;
  /* background-color: #a8c25e; */
  /* font-weight: bold; */
`;
