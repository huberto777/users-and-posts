import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const ContentWrapper = styled.div`
  margin-bottom: 10px;
  margin-left: 40%;
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
`;

const StyledButton = styled(Button)`
  margin: 20px 0 20px 0;
  width: 100%;
  height: 30px;

  @media (max-width: 500px) {
    width: 60vh;
    height: 30px;
  }
`;

const StyledTextarea = styled(Input)`
  margin: 20px 0 0 0;
  height: 30vh;
  width: 100%;
`;
const StyledInput = styled(Input)`
  margin: 20px 0 0 0;
  width: 100%;
`;

const ErrorField = styled.p`
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

class CommentAdd extends Component {
  state = {
    name: '',
    email: '',
    body: '',
    errorName: '',
    errorEmail: '',
    errorBody: '',
  };
  validate = () => {
    const { name, email, body } = this.state;
    if (name.length < 3) {
      this.setState({
        errorName: 'name field must have min. 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorName: '',
      });
    }
    if (!email.includes('@')) {
      this.setState({
        errorEmail: 'invalid email address',
      });
      return false;
    } else {
      this.setState({
        errorEmail: '',
      });
    }
    if (body.length < 3) {
      this.setState({
        errorBody: 'body field must have min. 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorBody: '',
      });
    }

    return true;
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  add = () => {
    const { name, email, body } = this.state;
    const isValid = this.validate();
    const postId = this.props.post.id;
    if (!isValid) return;
    this.props.addComment(name, email, body, postId);
    this.setState({
      name: '',
      email: '',
      body: '',
    });
  };
  render() {
    const { name, email, body, errorName, errorBody, errorEmail } = this.state;
    const { postIndex } = this.props;
    return (
      <>
        <ContentWrapper>
          <CommentWrapper>Create comment to post nr {postIndex + 1} </CommentWrapper>
          <StyledInput placeholder="name" name="name" value={name} onChange={this.handleInput} />
          <ErrorField>{errorName}</ErrorField>
          <StyledInput placeholder="email" name="email" value={email} onChange={this.handleInput} />
          <ErrorField>{errorEmail}</ErrorField>
          <StyledTextarea
            as="textarea"
            placeholder="body"
            name="body"
            value={body}
            onChange={this.handleInput}
          />
          <ErrorField>{errorBody}</ErrorField>
          <StyledButton add onClick={this.add}>
            add comment
          </StyledButton>
        </ContentWrapper>
      </>
    );
  }
}

export default CommentAdd;
