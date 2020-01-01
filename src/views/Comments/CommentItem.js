import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-left: 20%;
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

const Item = styled.div`
  width: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  float: left;
`;
const ItemValue = styled.div`
  width: 80%;
  float: left;
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
      <div>
        <Item>body:</Item>
        <ItemValue>{comment.body}</ItemValue>
      </div>
    </ContentWrapper>
  );
};

export default CommentItem;
