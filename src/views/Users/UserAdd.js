import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import iksIcon from 'assets/icons/iks.svg';
import { addUser as addUserAction } from 'actions';
import { Formik, Form } from 'formik';

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

const Error = styled.span`
  color: red;
  font-weight: ${({ theme }) => theme.light};
`;

const UserAdd = ({ toggleCreate, create, addUser }) => {
  return (
    <StyledWrapper create={create}>
      <Heading>Add User</Heading>
      <Formik
        initialValues={{ name: '', surname: '', email: '', phone: '', address: '' }}
        validate={values => {
          const errors = {};
          if (values.name.length < 3) {
            errors.name = 'The filed must have min. 3 characters';
          }
          if (values.surname.length < 3) {
            errors.surname = 'The filed must have min. 3 characters';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
            errors.phone = 'Phone number must be in International format';
          }
          if (values.address.length < 3) {
            errors.address = 'The filed must have min. 3 characters';
          }
          return errors;
        }}
        onSubmit={values => {
          addUser(values);
        }}
      >
        {({ values, errors, touched, isSubmitting, handleChange }) => (
          <StyledForm>
            <StyledInput
              type="text"
              placeholder="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <StyledInput
              type="text"
              placeholder="surname"
              name="surname"
              value={values.surname}
              onChange={handleChange}
            />
            {errors.surname && touched.surname && <Error>{errors.surname}</Error>}
            <StyledInput
              type="text"
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            <StyledInput
              type="tel"
              placeholder="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
            <StyledTextarea
              type="text"
              as="textarea"
              placeholder="address"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address && <Error>{errors.address}</Error>}
            <ButtonIcon type="submit" icon={plusIcon} disabled={isSubmitting} />
            <ButtonIcon icon={iksIcon} cancel onClick={toggleCreate} />
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

UserAdd.propTypes = {
  addUser: PropTypes.func.isRequired,
  create: PropTypes.bool.isRequired,
  toggleCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addUser: (id, ...userContent) => dispatch(addUserAction(id, ...userContent)),
});

export default connect(null, mapDispatchToProps)(UserAdd);
