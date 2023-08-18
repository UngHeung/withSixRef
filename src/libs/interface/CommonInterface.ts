/**
 * 공용 인터페이스
 */

import { ReactNode } from "react";
import { BUTTON_TYPE_VARIANTS, LAYOUT_TYPE_VARIANTS } from "../type/CommonType";

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
  link: string;
  image?: string;
}
