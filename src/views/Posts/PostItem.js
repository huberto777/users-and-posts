import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  float: left;
  width: 95vh;
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
  margin-right: 5px;
  float: left;
  margin-bottom: 30px;

  @media (max-width: 784px) {
    width: 15vh;
  }

  @media (max-width: 480px) {
    width: 12vh;
  }
`;
const ItemValue = styled.div`
  width: 70vh;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-bottom: 30px;

  @media (max-width: 784px) {
    width: 80vh;
  }
  @media (max-width: 480px) {
    width: 60vh;
  }
`;

const PostItem = props => {
  const { title, content } = props.post;
  const { index } = props;
  return (
    <StyledWrapper>
      <PostWrapper>post nr {index + 1}</PostWrapper>
      <StyledItemWrapper>
        <Item>title:</Item>
        <ItemValue>{title}</ItemValue>
        <Item>content:</Item>
        <ItemValue>{content}</ItemValue>
      </StyledItemWrapper>
    </StyledWrapper>
  );
};

export default PostItem;
