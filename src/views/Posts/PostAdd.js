import React, { Component } from 'react';
import Input from 'components/Input/Input';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 20px 0 20px 0;
  width: 95vh;
  height: 30px;

  @media (max-width: 750px) {
    width: 75vh;
  }

  @media (max-width: 600px) {
    width: 55vh;
  }
  @media (max-width: 450px) {
    width: 35vh;
  }
`;

const StyledTextarea = styled(Input)`
  margin: 20px 0 0 0;
  height: 30vh;
  width: 95vh;

  @media (max-width: 750px) {
    width: 75vh;
  }

  @media (max-width: 600px) {
    width: 55vh;
  }
  @media (max-width: 450px) {
    width: 35vh;
  }
`;
const StyledInput = styled(Input)`
  margin: 20px 0 0 0;
  width: 95vh;
  /* responsywność templatu */
  @media (max-width: 750px) {
    width: 75vh;
  }

  @media (max-width: 600px) {
    width: 55vh;
  }
  @media (max-width: 450px) {
    width: 35vh;
  }
`;

const ErrorField = styled.p`
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

class PostAdd extends Component {
  state = {
    title: '',
    content: '',
    errorTitle: '',
    errorContent: '',
  };
  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validate = () => {
    const { title, content } = this.state;
    if (title.length < 3) {
      this.setState({
        errorTitle: 'the title field must have min. 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorTitle: '',
      });
    }
    if (content.length < 3) {
      this.setState({
        errorContent: 'the content field must have min. 3 characters',
      });
      return false;
    } else {
      this.setState({
        errorContent: '',
      });
    }
    return true;
  };
  add = () => {
    const { title, content } = this.state;
    const isValid = this.validate();
    if (!isValid) return;
    this.props.addPost(title, content);
    this.setState({
      title: '',
      content: '',
      errorTitle: '',
      errorContent: '',
    });
  };
  render() {
    const { title, content, errorTitle, errorContent } = this.state;
    return (
      <>
        <Paragraph>Add Post</Paragraph>
        <StyledInput placeholder="title" value={title} onChange={this.handleInput} name="title" />
        <ErrorField>{errorTitle}</ErrorField>
        <StyledTextarea
          as="textarea"
          placeholder="conetnt"
          value={content}
          onChange={this.handleInput}
          name="content"
        />
        <ErrorField>{errorContent}</ErrorField>
        <StyledButton add onClick={this.add}>
          add post
        </StyledButton>
      </>
    );
  }
}

export default PostAdd;
