/**
 * 공용 인터페이스
 */

import { ReactNode } from "react";
import { BUTTON_TYPE_VARIANTS, INPUT_TYPE_VARIANTS, LAYOUT_TYPE_VARIANTS } from "../type/CommonType";

export interface LayoutProps {
  typeVariants: LAYOUT_TYPE_VARIANTS;
  children: ReactNode;
}

export interface ButtonProps {
  typeVariants: BUTTON_TYPE_VARIANTS;
  children: string;
  onClick: Function;
}

export interface InputProps {
  typeVariants: INPUT_TYPE_VARIANTS;
  type: string;
  value: string;
  placeholder: string;
  onChange: Function;
}
