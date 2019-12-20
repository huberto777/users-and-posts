import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-bottom: 10px;
`;
const PostWrapper = styled.div`
  background-color: ${({ theme }) => theme.cancel};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 15px;
`;
const StyledItemWrapper = styled.div`
  margin-bottom: 15px;
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
  margin-right: 5px;
  float: left;
`;
const ItemValue = styled.div`
  width: 75%;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const PostItem = props => {
  const { title, content } = props.post;
  const { index } = props;
  return (
    <ContentWrapper>
      <PostWrapper>post nr {index + 1}</PostWrapper>
      <StyledItemWrapper>
        <Item>title:</Item>
        <ItemValue>{title}</ItemValue>
      </StyledItemWrapper>
      <StyledItemWrapper>
        <Item>content:</Item>
        <ItemValue>{content}</ItemValue>
      </StyledItemWrapper>
    </ContentWrapper>
  );
};

export default PostItem;
