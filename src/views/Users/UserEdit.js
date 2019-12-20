import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import updateIcon from 'assets/icons/update.svg';
import iksIcon from 'assets/icons/iks.svg';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import styled from 'styled-components';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;
const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
  display: flex;
  width: 60%;
`;
const StyledTextarea = styled(Input)`
  margin-top: 20px;
  height: 30vh;
  display: flex;
  width: 60%;
`;
const StyledButtonIcon = styled(ButtonIcon)`
  display: flex;
`;

const UserEdit = ({ toggleEdit, name, surname, email, phone, address, updateUser }) => {
  return (
    <StyledWrapper>
      <StyledHeading>edit user</StyledHeading>
      <form onSubmit={updateUser}>
        <StyledInput defaultValue={name} name="updateName" />
        <StyledInput defaultValue={surname} name="updateSurname" />
        <StyledInput defaultValue={email} name="updateEmail" />
        <StyledInput defaultValue={phone} name="updatePhone" />
        <StyledTextarea as="textarea" defaultValue={address} name="updateAddress" />
        <StyledButtonIcon type="submit" update icon={updateIcon} />
        <StyledButtonIcon onClick={toggleEdit} cancel icon={iksIcon} />
      </form>
    </StyledWrapper>
  );
};

export default UserEdit;
