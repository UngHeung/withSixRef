import React from "react";
import { styled } from "styled-components";
import { NavItem } from "./NavItem";
import itemOptions from "./props";

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        {itemOptions.map((props) => {
          return <NavItem {...props} />;
        })}
        <li key={"profile"} style={{ width: "50px", height: "50px", background: "#ddd" }}>
          profile
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
`;
