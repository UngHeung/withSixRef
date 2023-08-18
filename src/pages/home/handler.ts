/**
 * 홈 핸들러
 */

import { MOUSE_EVENT } from "../../libs/type/EventType";

const handler = {
  category: (event: MOUSE_EVENT, setCategory: Function) => {
    const selectCategory = event.currentTarget.textContent;

    if (selectCategory === "전체 피드") {
      setCategory("all");
    } else if (selectCategory === "팔로우 피드") {
      setCategory("follow");
    }
  },
};

export default handler;
