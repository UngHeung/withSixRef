import React from "react";
import { styled } from "styled-components";
import defualtImage from "../../../assets/images/default-image-profile.png";
import { Link } from "react-router-dom";
import { ProfileProps } from "../../../libs/interface/CommonInterface";

export const ProfileImage = ({ ...props }: ProfileProps) => {
  return (
    <ProfileContainer>
      <Link to={props.profilelink}>
        <img src={props.user.image || defualtImage} alt="프로필 이미지" />
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
