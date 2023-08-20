import React from "react";
import { styled } from "styled-components";
import { ProfileImage } from "../common/profile/ProfileImage";
import { ProfileProps } from "../../libs/interface/CommonInterface";

export const FeedItem = ({ ...props }: ProfileProps) => {
  return (
    <StyledLi>
      <ProfileContainer>
        <ProfileImage {...props} />
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
