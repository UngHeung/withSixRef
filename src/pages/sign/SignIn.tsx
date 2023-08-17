/**
 * 로그인 페이지
 */

import React, { useState } from "react";
import Button from "../../components/common/button/Button";
import { buttonOptions, inputOptions } from "./props";
import { Input } from "../../components/common/input/Input";
import handler from "./handler";
import { INPUT_EVENT } from "../../libs/type/EventType";
import { Layout } from "../../layout/Layout";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout typeVariants="secondary">
      <section>top image</section>
      <section>
        <Input {...inputOptions.email} value={email} onChange={(event: INPUT_EVENT) => handler.email(setEmail, event)} />
        <Input {...inputOptions.password} value={password} onChange={(event: INPUT_EVENT) => handler.email(setPassword, event)} />
        <Button {...buttonOptions}>로그인</Button>
      </section>
    </Layout>
  );
};

export default SignIn;
