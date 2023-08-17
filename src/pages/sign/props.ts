/**
 * 로그인, 회원가입 속성
 */

import { ButtonProps, InputProps } from "../../libs/interface/CommonInterface";

const inputOptionBase: {
  value: string;
  placeholder: string;
  onChange: Function;
} = {
  value: "",
  placeholder: " ",
  onChange: () => {},
};

export const buttonOptions: ButtonProps = {
  typevariants: "basic",
  children: "",
  onClick: () => {},
};

export const inputOptions: { [key: string]: InputProps } = {
  email: {
    ...inputOptionBase,
    id: "user_email",
    type: "email",
    label: "Email",
  },

  password: {
    ...inputOptionBase,
    id: "user_password",
    type: "password",
    label: "Password",
  },
};
