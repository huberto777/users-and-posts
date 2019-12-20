import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import PostAdd from 'views/Posts/PostAdd';
import PostItem from 'views/Posts/PostItem';

const StyledWrapper = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  width: 100vh;

  /* responsywność templatu */
  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
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

const UserWrapper = styled.div`
  float: left;
  width: 95vh;
  display: flex;
  flex-direction: column;
`;

const StyledItemWrapper = styled.div``;

const Item = styled.div`
  width: 20vh;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 5px;
  float: left;
  margin-bottom: 20px;

 
`;
const ItemValue = styled.div`
  width: 70vh;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  float: left;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    width: 55vh;
  }

  
`;

const InputWrapper = styled.div`
  float: left;
  width: 95vh;
  display: flex;
  flex-direction: column;
`;

class UserDetails extends Component {
  state = {
    posts: [],
    id: 1,
  };
  addPost = (title, content) => {
    const { id } = this.state;
    let post = {
      id,
      title,
      content,
      userId: this.props.match.params.id,
    };
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      id: id + 1,
    }));
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { posts } = this.state;

    return (
      <StyledWrapper>
        <UserWrapper>
          <StyledButton as={Link} to="/" cancel>
            back
          </StyledButton>
          <StyledItemWrapper>
            <Item>name: </Item>
            <ItemValue>Mark</ItemValue>
            <Item>surname: </Item>
            <ItemValue>Ccacgchacvh</ItemValue>
            <Item>email: </Item>
            <ItemValue>maniek@op.pl</ItemValue>
            <Item>phone: </Item>
            <ItemValue>+48235625869</ItemValue>
            <Item>address: </Item>
            <ItemValue>os. Złotego Wieku 55/55, 31-618 Kraków, district: Małopolska</ItemValue>
          </StyledItemWrapper>
        </UserWrapper>
        <InputWrapper>
          <PostAdd addPost={this.addPost} />
          {posts.map((post, index) => (
            <PostItem key={post.id} post={post} index={index} />
          ))}
        </InputWrapper>
      </StyledWrapper>
    );
  }
}

export default UserDetails;
