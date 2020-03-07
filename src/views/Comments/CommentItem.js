import React from 'react';
import { CommentWrapper, ContentWrapper, Item, ItemValue } from 'styles/comments';

const CommentItem = ({ comment, post }) => {
  if (comment.postId !== post.id) {
    return true;
  }
  return (
    <ContentWrapper>
      <CommentWrapper>
        Comment by {comment.name} ({comment.email})
      </CommentWrapper>
      <div>
        <Item>body:</Item>
        <ItemValue>{comment.body}</ItemValue>
      </div>
    </ContentWrapper>
  );
};

export default CommentItem;
