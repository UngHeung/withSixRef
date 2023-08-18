import React from "react";
import { Layout } from "../../layout/Layout";
import { styled } from "styled-components";

export const Home = () => {
  return (
    <Layout typevariants="primary">
      <MenuContainer>
        <ul>
          <li>
            <button>팔로우 피드</button>
          </li>
          <li>
            <button>전체 피드</button>
          </li>
        </ul>
      </MenuContainer>
    </Layout>
  );
};

const MenuContainer = styled.menu`
  width: 100%;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid var(--color-gray-l);
  box-sizing: border-box;
  overflow: hidden;

  & > ul {
    float: right;
  }

  & li {
    display: inline-block;
    font-size: var(--font-size-s);
    color: var(--color-gray-d);

    &:first-of-type::after {
      content: "|";
      margin: 0 5px;
      font-size: var(--font-size-xs);
      font-weight: bolder;
      vertical-align: top;
    }
  }
`;
