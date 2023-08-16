/**
 * 애플리케이션 공용 레이아웃
 */

import { styled } from "styled-components";
import { LayoutProps } from "../libs/interface/CommonInterface";

export const Layout = ({ ...props }: LayoutProps) => {
  return <StyleMain>{props.children}</StyleMain>;
};

const StyleMain = styled.main`
  width: 390px;
  background-color: white;
`;
