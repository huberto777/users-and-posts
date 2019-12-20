import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import iksIcon from 'assets/icons/iks.svg';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.add};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 50%;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ create }) => (create ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
`;
const StyledTextarea = styled(Input)`
  margin: 20px 0 0 0;
  height: 30vh;
`;
const ErrorField = styled.p`
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

class UserAdd extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    errorName: '',
    errorSurname: '',
    errorEmail: '',
    errrorPhone: '',
    errorAddress: '',
  };

  validate = () => {
    const { name, surname, email, phone, address } = this.state;
    if (name.length < 3) {
      this.setState({
        errorName: 'name must have min 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorName: '',
      });
    }
    if (surname.length < 3) {
      this.setState({
        errorSurname: 'name must have min 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorSurname: '',
      });
    }
    if (!email.includes('@')) {
      this.setState({
        errorEmail: 'invalid email address',
      });
      return false;
    } else {
      this.setState({ errorEmail: '' });
    }
    if (!phone) {
      this.setState({
        errorPhone: 'invalid phone number',
      });
      return false;
    } else {
      this.setState({ errorPhone: '' });
    }
    if (!address) {
      this.setState({
        errorAddress: 'complete address field',
      });
      return false;
    } else {
      this.setState({ errorAddress: '' });
    }
    return true;
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  add = () => {
    const { addUser } = this.props;
    const { name, surname, email, phone, address } = this.state;
    const isValid = this.validate();
    if (!isValid) return;
    addUser(name, surname, email, phone, address);
    this.setState({
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
    });
  };
  render() {
    const {
      name,
      surname,
      email,
      phone,
      address,
      errorName,
      errorSurname,
      errorEmail,
      errorPhone,
      errorAddress,
    } = this.state;
    const { toggleCreate, create } = this.props;
    return (
      <StyledWrapper create={create}>
        <Heading>Add User</Heading>
        <StyledInput placeholder="name" name="name" value={name} onChange={this.handleInput} />
        <ErrorField>{errorName}</ErrorField>
        <StyledInput
          placeholder="surname"
          name="surname"
          value={surname}
          onChange={this.handleInput}
        />
        <ErrorField>{errorSurname}</ErrorField>
        <StyledInput placeholder="email" name="email" value={email} onChange={this.handleInput} />
        <ErrorField>{errorEmail}</ErrorField>
        <StyledInput placeholder="phone" name="phone" value={phone} onChange={this.handleInput} />
        <ErrorField>{errorPhone}</ErrorField>
        <StyledTextarea
          as="textarea"
          placeholder="address"
          name="address"
          value={address}
          onChange={this.handleInput}
        />
        <ErrorField>{errorAddress}</ErrorField>
        <ButtonIcon type="submit" icon={plusIcon} onClick={this.add} />
        <ButtonIcon icon={iksIcon} cancel onClick={toggleCreate} />
      </StyledWrapper>
    );
  }
}

export default UserAdd;
