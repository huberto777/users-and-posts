import styled from 'styled-components';
import { Form } from 'formik';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
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

const StyledButton = styled(Button)`
  margin-bottom: 20px;
  width: 100%;
  height: 30px;
`;

const Item = styled.div`
  width: 15%;
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
  width: 85%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  float: left;
  margin-bottom: 30px;
`;

const Tr = styled.tr`
  height: 35px;
  background-color: ${({ theme }) => theme.cancel};
`;

const Td = styled.td`
  padding-right: 5px;
  padding-left: 5px;
  color: ${({ theme }) => theme.grey100};
`;
const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;

export {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButton,
  Item,
  ItemValue,
  Td,
  Tr,
  StyledButtonIcon,
  ContentWrapper,
  StyledHeading,
};
