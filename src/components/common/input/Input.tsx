/**
 * 기본, 검색 인풋 컴포넌트
 */

import React from "react";
import { InputProps } from "../../../libs/interface/CommonInterface";

export const Input = ({ ...props }: InputProps) => {
  return <input type={props.type} placeholder={props.placeholder} />;
};
