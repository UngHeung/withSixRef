/**
 * 레이아웃 헤더
 */

import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/logo/LOGO-negative.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </StyledLogo>
      <StyledUserName>엉흥</StyledUserName>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  width: 390px;
  height: 70px;
  padding: 0 20px;
  background-color: var(--color-main);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  line-height: 70px;
  transform: translateX(-50%);
  overflow: hidden;

  & img {
    width: 50px;
    vertical-align: middle;
  }
`;

const StyledLogo = styled.h2`
  float: left;
  line-height: 65px;
`;

const StyledUserName = styled.span`
  float: right;
  color: white;

  &::after {
    content: "님";
    margin-left: 2px;
    font-size: var(--font-size-s);
  }
`;
