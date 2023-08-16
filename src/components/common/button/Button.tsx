/**
 * 기본, 팔로우 버튼 컴포넌트
 */

import React from "react";
import { styled } from "styled-components";
import { ButtonProps } from "../../../libs/interface/CommonInterface";

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 240px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--color-main);
  color: white;
`;

export default Button;
