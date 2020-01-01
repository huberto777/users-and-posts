import React from 'react';
import { connect } from 'react-redux';
import { toggleCreate as toggleCreateAction, addPost as addPostAction } from 'actions';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import iksIcon from 'assets/icons/iks.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Error = styled.span`
  color: red;
  font-weight: ${({ theme }) => theme.light};
`;

const PostAdd = ({toggleCreate, addPost, match}) => (
  <StyledWrapper>
    <Heading>Add Post</Heading>
    <Formik
      initialValues={{ title: '', content: '', userId: parseInt(match.params.id) }}
      validate={values => {
        const errors = {};
        if (values.title.length < 3) {
          errors.title = 'The field title must have min. 3 characters';
        }
        if (values.content.length < 5) {
          errors.content = 'The field title must have min. 5 characters';
        }

        return errors;
      }}
      onSubmit={values => {
        addPost(values);
      }}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="title"
            name="title"            
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && touched.title && <Error>{errors.title}</Error>}
          <StyledTextarea
            as="textarea"
            type="text"
            name="content"
            onChange={handleChange}
            value={values.content}
            placeholder="content"
          />
          {errors.content && touched.content && <Error>{errors.content}</Error>}

          <ButtonIcon type="submit" icon={plusIcon} add disabled={isSubmitting} />
          <ButtonIcon icon={iksIcon} cancel onClick={() => toggleCreate()} />
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

PostAdd.propTypes = {
  addPost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  toggleCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleCreate: () => dispatch(toggleCreateAction()),
  addPost: (id, ...postContent) => dispatch(addPostAction(id, ...postContent)),
});

export default connect(null, mapDispatchToProps)(PostAdd);
