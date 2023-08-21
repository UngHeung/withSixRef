/**
 * 공용 인터페이스
 */

import { ReactNode } from "react";
import { BUTTON_TYPE_VARIANTS, LAYOUT_TYPE_VARIANTS } from "../type/CommonType";

export interface UserProps {
  _id: string;
  username: string;
  accountname: string;
  intro: string;
  image: string;
  isfollow: boolean;
  followingCount: number;
  followerCount: number;
  following: string[];
  follower: string[];
}

export interface LayoutProps {
  typevariants: LAYOUT_TYPE_VARIANTS;
  children: ReactNode;
  disabled?: boolean;
}

export interface NavItemProps {
  pageIcon: string;
  pageName: string;
  pageLink: string;
  key: string;
}

export interface ButtonProps {
  typevariants: BUTTON_TYPE_VARIANTS;
  children: string;
  onClick: Function;
}

export interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: Function;
  autoComplete?: string;
}

export interface ProfileProps {
  profilImage: string;
}
