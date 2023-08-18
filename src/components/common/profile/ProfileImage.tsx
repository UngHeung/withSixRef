import React from "react";
import { styled } from "styled-components";
import defualtImage from "../../../assets/images/default-image-profile.png";
import { Link } from "react-router-dom";

export const ProfileImage = ({ ...props }) => {
  return (
    <ProfileContainer>
      <Link to={props.link}>
        <img src={props.image || defualtImage} alt="프로필 이미지" />
      </Link>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.figure`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  border: 1px solid var(--color-gray-l);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;
