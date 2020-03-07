import styled from 'styled-components';
import { Form } from 'formik';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
`;

const StyledTextarea = styled(Input)`
  margin-top: 20px;
  height: 30vh;
`;

const Error = styled.span`
  color: red;
  font-weight: ${({ theme }) => theme.light};
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
  StyledForm,
  StyledInput,
  StyledTextarea,
  Error,
  ContentWrapper,
  Item,
  ItemValue,
};
