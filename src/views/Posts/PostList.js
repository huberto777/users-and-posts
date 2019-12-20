import React, { Component } from 'react';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import PostItem from './PostItem';
import CommentItem from 'views/Comments/CommentItem';
import CommentAdd from 'views/Comments/CommentAdd';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;
class PostList extends Component {
  state = {
    posts: [
      { id: 1, title: 'new title', content: 'new all content', userId: 1 },
      { id: 2, title: 'all title', content: 'all all content', userId: 1 },
    ],
    comments: [
      {
        id: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        body: 'comments to post nr 1',
        postId: 1,
        userName: 'John',
        userEmail: 'john.doe@exampole.com',
      },
      {
        id: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        body: 'comments to post nr 2',
        postId: 2,
        userName: 'Józek',
        userEmail: 'jozek@example.com',
      },
      {
        id: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        body: 'new comments to post nr 2',
        postId: 2,
        userName: 'Zenek',
        userEmail: 'zenek@exampole.com',
      },
      {
        id: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        body: 'newest comments to post nr 2',
        postId: 2,
        userName: 'Wacek',
        userEmail: 'wacek@exampole.com',
      },
    ],
  };
  addComment = (name, email, body, postId) => {
    const comment = {
      id: `_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      body,
      postId,
      userName: name,
      userEmail: email,
    };
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
    }));
  };
  render() {
    const { posts, comments } = this.state;
    return (
      <>
        <StyledHeading>Posts list</StyledHeading>
        <ContentWrapper>
          {posts.map((post, index) => (
            <>
              <PostItem key={post.id} post={post} index={index} />
              {comments.map((comment, i) => (
                <CommentItem
                  key={comment.id}
                  post={post}
                  comment={comment}
                  index={i}
                  postIndex={index}
                />
              ))}
              <CommentAdd postIndex={index} post={post} addComment={this.addComment} />
            </>
          ))}
        </ContentWrapper>
      </>
    );
  }
}

export default PostList;
