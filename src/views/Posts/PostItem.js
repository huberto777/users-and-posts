import React from 'react';
import styled from 'styled-components';
import { PostWrapper, Item, ItemValue } from 'styles/posts';

const StyledWrapper = styled.div`
  float: left;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostItem = props => {
  const { title, content } = props.post;
  const { index } = props;
  return (
    <StyledWrapper>
      <PostWrapper>post nr {index + 1}</PostWrapper>
      <div>
        <Item>title:</Item>
        <ItemValue>{title}</ItemValue>
        <Item>content:</Item>
        <ItemValue>{content}</ItemValue>
      </div>
    </StyledWrapper>
  );
};

export default PostItem;
