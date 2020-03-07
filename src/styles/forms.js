import styled from 'styled-components';
import { Form } from 'formik';
import Input from 'components/Input/Input';

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

export { StyledForm, StyledInput, StyledTextarea };
