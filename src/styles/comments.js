import styled from 'styled-components';
import Button from 'components/Button/Button';


const StyledWrapper = styled.div`
  z-index: 9999;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 70%;
  background-color: white;
  margin-left: 30%;
  float: left;
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

const StyledButton = styled(Button)`
  margin: 20px 0 20px 0;
  width: 100%;
  height: 30px;
`;

const ContentWrapper = styled.div`
  margin-left: 20%;
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

export {
  StyledWrapper,
  CommentWrapper,
  StyledButton,
  ContentWrapper,
  Item,
  ItemValue,
};
