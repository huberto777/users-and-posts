import styled from 'styled-components';
import { Form } from 'formik';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.add};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
`;
const StyledTextarea = styled(Input)`
  margin-top: 20px;
  height: 30vh;
`;
const StyledForm = styled(Form)`
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
const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 10px;
`;

export {
  StyledWrapper,
  StyledInput,
  StyledTextarea,
  StyledForm,
  PostWrapper,
  Item,
  ItemValue,
  StyledHeading,
  ContentWrapper,
};
