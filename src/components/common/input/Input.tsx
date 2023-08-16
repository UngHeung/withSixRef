/**
 * 기본, 검색 인풋 컴포넌트
 */

import React from "react";
import { InputProps } from "../../../libs/interface/CommonInterface";
import { styled } from "styled-components";

export const Input = ({ ...props }: InputProps) => {
  return (
    <ButtonContainer>
      <StyledInput {...props} />
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 10px;
  display: block;
  width: 240px;
  height: 50px;
  font-family: var(--font-eng);
  font-size: var(--font-size-l);
  font-style: italic;
  line-height: 50px;
  color: var(--color-gray-d);
  transition: top, height, font 0.3s, 0.3s;
  cursor: text;
`;

const StyledInput = styled.input<InputProps>`
  width: 240px;
  height: 1px;
  margin-top: 49px;
  box-sizing: border-box;
  border-bottom: solid 1px var(--color-main);
  vertical-align: middle;
  color: white;
  text-align: center;
  transition: margin, height 0.3s, 0.3s;

  &:focus,
  &:not(:placeholder-shown) {
    height: 50px;
    margin-top: 0;
    background-color: var(--color-main);
    border-radius: 5px;
  }

  &:focus + ${StyledLabel}, &:not(:placeholder-shown) + ${StyledLabel} {
    top: -20px;
    left: 0px;
    height: 70px;
    font-size: var(--font-size-s);
    line-height: 20px;
    z-index: -1;
  }
`;
