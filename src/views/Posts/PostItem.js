import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  float: left;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostWrapper = styled.div`
  background-color: ${({ theme }) => theme.cancel};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: white;
  float: left;
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 15px;
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
  margin-bottom: 30px;
`;
const ItemValue = styled.div`
  width: 80%;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-bottom: 30px;
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
