import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentItem from 'views/Comments/CommentItem';
import CommentAdd from 'views/Comments/CommentAdd';
import { StyledHeading, ContentWrapper } from 'styles/posts';
import PostItem from './PostItem';

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
