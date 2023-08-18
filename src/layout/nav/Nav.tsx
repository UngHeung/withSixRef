/**
 * 메인 메뉴
 */

import React from "react";
import { styled } from "styled-components";
import { NavItem } from "./NavItem";
import itemOptions from "./props";
import { ProfileImage } from "../../components/common/profile/ProfileImage";

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        {itemOptions.map((props) => {
          return <NavItem {...props} />;
        })}
        <li key={"profile"}>
          <ProfileImage />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  border-top: 1px solid var(--color-gray-l);

  & > ul {
    display: flex;
    justify-content: space-between;
  }

  & li {
    width: 50px;
    height: 50px;
  }
`;
