/**
 * 애플리케이션 공용 레이아웃
 */

import { css, styled } from "styled-components";
import { LayoutProps } from "../libs/interface/CommonInterface";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout = ({ ...props }: LayoutProps) => {
  return (
    <>
      {props.typevariants === "primary" && <Header />}
      <StyledMain {...props}>{props.children}</StyledMain>
      {props.typevariants === "primary" && <Footer />}
    </>
  );
};

const StyledMain = styled.main<LayoutProps>`
  ${(props) => TYPE_VARIANTS[props.typevariants]}

  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  border-left: 1px solid var(--color-gray-l);
  border-right: 1px solid var(--color-gray-l);
  box-sizing: border-box;
`;

const TYPE_VARIANTS = {
  primary: css`
    padding: 70px 20px 50px;
  `,

  secondary: css`
    padding: 0 20px;
  `,
};
