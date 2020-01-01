import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import CommentItem from 'views/Comments/CommentItem';
import CommentAdd from 'views/Comments/CommentAdd';
import PostItem from './PostItem';

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.add};
  text-transform: uppercase;
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 10px;
`;

const PostList = ({ posts, comments }) => (
  <>
    <StyledHeading>Posts list</StyledHeading>
    <ContentWrapper>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <PostItem post={post} index={index} />
          {comments.map(comment => (
            <CommentItem key={comment.id} post={post} comment={comment} />
          ))}
          <CommentAdd postIndex={index} post={post} />
        </React.Fragment>
      ))}
    </ContentWrapper>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ),
};
PostList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      postId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = ({ posts, comments }) => ({ posts, comments });

export default connect(mapStateToProps)(PostList);
