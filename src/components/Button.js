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
  display: inline-flex;
  align-items: center;
  padding: 10px 15px;
  text-transform: uppercase;
  /* border: 3px solid #a8c25e; */
  background: #ce7c41;
  border: none;
  color: white;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  /* background-color: #a8c25e; */
  /* font-weight: bold; */
`;
