/**
 * 애플리케이션 공용 레이아웃
 */

import { styled } from "styled-components";
import { LayoutProps } from "../libs/interface/CommonInterface";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout = ({ ...props }: LayoutProps) => {
  return (
    <>
      {!props.disabled && <Header />}
      <StyledMain>{props.children}</StyledMain>
      {!props.disabled && <Footer />}
    </>
  );
};

// const StyledBack = styled.div

const StyledMain = styled.main`
  width: 390px;
  margin: 0 auto;
  background-color: white;
`;
