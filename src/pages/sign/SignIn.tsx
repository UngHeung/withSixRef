/**
 * 로그인 페이지
 */

import React, { useState } from "react";
import Button from "../../components/common/button/Button";
import handler from "./handler";
import topLogo from "../../assets/logo/LOGO-full-negative.svg";
import { buttonOptions, inputOptions } from "./props";
import { Input } from "../../components/common/input/Input";
import { INPUT_EVENT } from "../../libs/type/EventType";
import { Layout } from "../../layout/Layout";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import signUpIcon from "../../assets/icons/common/icon-signup.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout typevariants="secondary">
      <TopImageContainer>
        <img src={topLogo} alt="로고" />
      </TopImageContainer>
      <UserInputContainer
        onSubmit={(e) => {
          e.preventDefault();
          handler.login(email, password);
        }}
      >
        <Input {...inputOptions.email} value={email} onChange={(event: INPUT_EVENT) => handler.email(setEmail, event)} />
        <Input {...inputOptions.password} value={password} onChange={(event: INPUT_EVENT) => handler.email(setPassword, event)} autoComplete="off" />
        <ButtonContainer>
          <Button {...buttonOptions}>로그인</Button>
          <Link to={"#"}>
            <img src={signUpIcon} alt="회원가입" />
            Sign-up
          </Link>
        </ButtonContainer>
      </UserInputContainer>
    </Layout>
  );
};

export default SignIn;

const TopImageContainer = styled.div`
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
  height: 55vh;
  background-color: var(--color-main);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const UserInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 45vh;
`;

const ButtonContainer = styled.div`
  position: relative;
  overflow: hidden;

  & > button {
    display: block;
  }

  & > a {
    float: right;
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--color-gray-d);
    text-align: right;
  }

  & img {
    margin-right: 3px;
    vertical-align: middle;
  }
`;
