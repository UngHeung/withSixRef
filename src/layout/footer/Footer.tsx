import React from "react";
import { styled } from "styled-components";
import { Nav } from "../nav/Nav";

export const Footer = () => {
  return (
    <StyledFooter>
      <Nav />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 390px;
  height: 50px;
  box-sizing: border-box;
  transform: translateX(-50%);
  overflow: hidden;
`;
