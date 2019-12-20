import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-left: 40%;
`;
const CommentWrapper = styled.div`
  background-color: ${({ theme }) => theme.cancel};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const StyledItemWrapper = styled.div`
 
  
`;
const Item = styled.div`
  width: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 5px;
  width: 20%;
  float: left;
  
`;
const ItemValue = styled.div`
  width: 75%;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
 
`;

const CommentItem = ({ comment, post, index, postIndex }) => {
  if (comment.postId !== post.id) {
    return true;
  }
  return (
    <ContentWrapper>
      <CommentWrapper>
        Comment by {comment.userName} ({comment.userEmail})
      </CommentWrapper>
      <StyledItemWrapper>
        <Item>body:</Item>
        <ItemValue>{comment.body}</ItemValue>
      </StyledItemWrapper>
    </ContentWrapper>
  );
};

export default CommentItem;
