import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import updateIcon from 'assets/icons/update.svg';
import iksIcon from 'assets/icons/iks.svg';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.update};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 70vh;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ edit }) => (edit ? '0' : '0%')});
  transition: transform 0.25s ease-in-out;
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

const UserEdit = ({ toggleEdit, name, surname, email, phone, address }) => {
  return (
    <StyledWrapper>
      <Heading>Edit {name}</Heading>
      <form>
        <StyledInput defaultValue={name} name="updateName" />
        <StyledInput defaultValue={surname} name="updateSurname" />
        <StyledInput defaultValue={email} name="updateEmail" />
        <StyledInput defaultValue={phone} name="updatePhone" />
        <StyledTextarea as="textarea" defaultValue={address} name="updateAddress" />
        <ButtonIcon type="submit" update icon={updateIcon} />
        <ButtonIcon onClick={toggleEdit} cancel icon={iksIcon} />
      </form>
    </StyledWrapper>
  );
};

export default UserEdit;
