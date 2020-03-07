/* eslint-disable react/state-in-constructor */
import React from 'react';
import { connect } from 'react-redux';
import { addComment as addCommentAction } from 'actions';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { StyledWrapper, CommentWrapper, StyledButton } from 'styles/comments';
import { StyledForm, StyledInput, StyledTextarea } from 'styles/forms';
import { Error } from 'styles/error';

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
      onSubmit={(values, { resetForm }) => {
        addComment(values);
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <StyledForm>
          <StyledInput
            type="name"
            name="name"
            onChange={handleChange}
            placeholder="name"
            value={values.name}
          />
          {errors.name && touched.name && <Error>{errors.name}</Error>}
          <StyledInput
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
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
          {errors.body && <Error>{errors.body}</Error>}
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
