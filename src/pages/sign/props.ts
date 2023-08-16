/**
 * 로그인, 회원가입 속성
 */

import { ButtonProps, InputProps } from "../../libs/interface/CommonInterface";
import { INPUT_TYPE_VARIANTS } from "../../libs/type/CommonType";

const inputOptionBase: {
  typeVariants: INPUT_TYPE_VARIANTS;
  value: string;
  onChange: Function;
} = {
  typeVariants: "basic",
  value: "",
  onChange: () => {},
};

export const buttonOptions: ButtonProps = {
  typeVariants: "basic",
  children: "",
  onClick: () => {},
};

export const inputOptions: { [key: string]: InputProps } = {
  email: {
    ...inputOptionBase,
    type: "email",
    placeholder: "이메일을 입력해주세요.",
  },

  password: {
    ...inputOptionBase,
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
  },
};
