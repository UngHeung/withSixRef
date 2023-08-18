import React from "react";
import { styled } from "styled-components";
import { NavItemProps } from "../../libs/interface/CommonInterface";
import { Link } from "react-router-dom";

export const NavItem = ({ ...props }: NavItemProps) => {
  return (
    <Link to={props.pageLink}>
      <StyledLi key={props.key}>
        <figure>
          <img src={props.pageIcon} alt={`${props.pageName} 아이콘`} />
          <figcaption>{props.pageName}</figcaption>
        </figure>
      </StyledLi>
    </Link>
  );
};

const StyledLi = styled.li`
  display: block;
  width: 50px;
  height: 50px;

  & > figure {
    margin-top: 5px;
    text-align: center;
    line-height: 20px;
  }

  & img {
    height: 20px;
    vertical-align: middle;
  }

  & figcaption {
    font-size: var(--font-size-xs);
    color: var(--color-gray-d);
  }
`;
