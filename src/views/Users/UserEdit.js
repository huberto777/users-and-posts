/* eslint-disable eqeqeq */
import React from 'react';
import { connect } from 'react-redux';
import { updateUser as updateUserAction } from 'actions';
import PropTypes from 'prop-types';
import phoneNumberPropType from 'phone-number-prop-type';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import updateIcon from 'assets/icons/update.svg';
import iksIcon from 'assets/icons/iks.svg';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Error } from 'styles/error';
import { StyledWrapper, StyledInput, StyledTextarea, StyledForm } from 'styles/users';

const EditStyledWrapper = styled(StyledWrapper)`
  border-left: 10px solid ${({ theme }) => theme.update};
`;

const UserEdit = props => {
  const [user] = props.activeUser;
  const { updateUser, history } = props;
  return (
    <EditStyledWrapper>
      <Heading>
        Edit: {user.name} {user.surname}
      </Heading>
      <Formik
        initialValues={{
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone,
          address: user.address,
        }}
        validate={values => {
          const errors = {};
          if (values.name < 3) {
            errors.name = 'The field name must have min. 3 characters';
          }
          if (values.surname < 3) {
            errors.surname = 'The field surname must have min. 3 characters';
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
          updateUser(values);
          history.goBack();
        }}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <StyledForm>
            <StyledInput type="text" value={values.name} name="name" onChange={handleChange} />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <StyledInput
              type="text"
              value={values.surname}
              name="surname"
              onChange={handleChange}
            />
            {errors.surname && touched.surname && <Error>{errors.surname}</Error>}
            <StyledInput type="email" name="email" onChange={handleChange} value={values.email} />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            <StyledInput type="tel" name="phone" value={values.phone} onChange={handleChange} />
            {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
            <StyledTextarea
              type="text"
              as="textarea"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address && <Error>{errors.address}</Error>}
            <ButtonIcon type="submit" update icon={updateIcon} disabled={isSubmitting} />
            <ButtonIcon onClick={() => history.push('/')} cancel icon={iksIcon} />
          </StyledForm>
        )}
      </Formik>
    </EditStyledWrapper>
  );
};

UserEdit.propTypes = {
  activeUser: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: phoneNumberPropType.isRequired,
      address: PropTypes.string.isRequired,
    }),
  ),
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  activeUser: state.users.filter(user => user.id == ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  updateUser: (...userContent) => dispatch(updateUserAction(...userContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
