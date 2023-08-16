/**
 * 로그인, 회원가입 핸들러
 */

import { INPUT_EVENT } from "../../libs/type/EventType";

const handler = {
  email: (setEmail: Function, event: INPUT_EVENT) => {
    setEmail(event.target.value);
  },

  password: (setPassword: Function, event: INPUT_EVENT) => {
    setPassword(event.target.value);
  },
};

export default handler;
