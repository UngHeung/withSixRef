import React from "react";
import { styled } from "styled-components";
import { ProfileImage } from "../common/profile/ProfileImage";
import { UserProps } from "../../libs/interface/CommonInterface";

export const FeedItem = ({ ...props }: UserProps) => {
  return (
    <StyledLi>
      <ProfileContainer>
        <ProfileImage image={props.image} />
      </ProfileContainer>
      <FeedItemContainer>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
      </FeedItemContainer>
    </StyledLi>
  );
};

const StyledLi = styled.li``;
const ProfileContainer = styled.section``;
const FeedItemContainer = styled.section``;
