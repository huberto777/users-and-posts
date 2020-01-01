/* eslint-disable react/state-in-constructor */
import React from 'react';
import { connect } from 'react-redux';
import { addComment as addCommentAction } from 'actions';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

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
  float:left;
`;

const CommentWrapper = styled.div`
  background-color: ${({ theme }) => theme.delete};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  width: 100%;
  margin-top: 20px;
  float: left;
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

const CommentAdd = ({ postIndex, post, addComment }) => (
    <StyledWrapper>
      <CommentWrapper>Create comment to post nr {postIndex + 1} </CommentWrapper>
      <Formik
        initialValues={{ name: '', email: '', body: '', postId: post.id }}
        validate={values => {
          const errors = {};
          if (values.name.length < 3) {
            errors.name = 'The field name must have min. 3 characters';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (values.body.length < 5) {
            errors.body = 'The field body must have min. 5 characters';
          }
          return errors;
        }}
        onSubmit={values => {
          addComment(values);
        }}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <StyledForm>
            <StyledInput
              type="name"
              name="name"
              onChange={handleChange}
              placeholder="name"
              value={values.email}
            />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <StyledInput
              type="email"
              name="email"
              onChange={handleChange}
              value={values.password}
              placeholder="email"
            />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            <StyledTextarea
              as="textarea"
              placeholder="body"
              name="body"
              value={values.body}
              onChange={handleChange}
            />
            {errors.body && touched.body && <Error>{errors.body}</Error>}
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
);

CommentAdd.propTypes = {
  addComment: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addComment: (id, ...commentContent) => dispatch(addCommentAction(id, ...commentContent)),
});

export default connect(null, mapDispatchToProps)(CommentAdd);
