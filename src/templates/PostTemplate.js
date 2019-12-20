import React from 'react';
import styled from 'styled-components';


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
`;
const Item = styled.div`
  width: 15vh;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 15px;
`;
const ItemValue = styled.div`
  width: 45vh;
`;

const PostTemplate = () => {
  return <></>;
};

export default PostTemplate;
