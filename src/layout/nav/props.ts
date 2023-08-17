import { NavItemProps } from "../../libs/interface/CommonInterface";
import home from "../../assets/icons/nav/home.png";
import together from "../../assets/icons/nav/together.png";
import review from "../../assets/icons/nav/review.png";
import chat from "../../assets/icons/nav/chat.png";

const itemOptions: NavItemProps[] = [
  {
    pageIcon: home,
    pageName: "홈",
    pageLink: "/home",
    key: "withsix_nav_key_home",
  },

  {
    pageIcon: together,
    pageName: "모임",
    pageLink: "/together",
    key: "withsix_nav_key_together",
  },

  {
    pageIcon: review,
    pageName: "후기",
    pageLink: "/review",
    key: "withsix_nav_key_review",
  },

  {
    pageIcon: chat,
    pageName: "채팅",
    pageLink: "/chat",
    key: "withsix_nav_key_chat",
  },
];

export default itemOptions;
