import React, { useState } from "react";
import { Layout } from "../../layout/Layout";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import { HOME_TYPE_VARIANTS } from "../../libs/type/homeType";
import { HomeProps } from "../../libs/interface/homeInterface";
import handler from "./handler";

export const Home = () => {
  const [category, setCategory] = useState<HOME_TYPE_VARIANTS>("all");

  return (
    <Layout typevariants="primary">
      <MenuContainer category={category}>
        <ul>
          <li>
            <Link to="#" onClick={(event) => handler.category(event, setCategory)}>
              전체 피드
            </Link>
          </li>
          <li>
            <Link to="#" onClick={(event) => handler.category(event, setCategory)}>
              팔로우 피드
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </Layout>
  );
};

const MenuContainer = styled.menu<HomeProps>`
  width: 100%;
  height: 25px;
  padding: 0 10px;
  background-color: white;
  border-bottom: 1px solid var(--color-gray-l);
  box-sizing: border-box;
  overflow: hidden;

  & > ul {
    ${(props) => TYPE_VARIANTS[props.category]}

    float: right;
  }

  & li {
    display: inline-block;
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-m);
    color: var(--color-gray-d);

    &:first-of-type::after {
      content: "|";
      margin: 0 5px;
      font-size: var(--font-size-xs);
      vertical-align: top;
    }
  }
`;

const TYPE_VARIANTS = {
  all: css`
    & li:first-child {
      font-weight: var(--font-weight-b);
      color: var(--color-black);
    }
  `,

  follow: css`
    & li:last-child {
      font-weight: var(--font-weight-b);
      color: var(--color-black);
    }
  `,
};
