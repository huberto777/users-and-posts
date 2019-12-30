import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-left: 40vh;
`;
const CommentWrapper = styled.div`
  background-color: ${({ theme }) => theme.update};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 20px;
  margin-top: 20px;
  display: inline-block;
  width: 100%;
`;
const StyledItemWrapper = styled.div``;
const Item = styled.div`
  width: 20vh;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  width: 20vh;
  float: left;
  margin: 0 5px 0 0;
`;
const ItemValue = styled.div`
  width: 70vh;
  float: left;
  /* padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px; */
  padding: 10px 0 10px 10px;
`;

const CommentItem = ({ comment, post }) => {
  if (comment.postId !== post.id) {
    return true;
  }
  return (
    <ContentWrapper>
      <CommentWrapper>
        Comment by {comment.name} ({comment.email})
      </CommentWrapper>
      <StyledItemWrapper>
        <Item>body:</Item>
        <ItemValue>{comment.body}</ItemValue>
      </StyledItemWrapper>
    </ContentWrapper>
  );
};

export default CommentItem;
