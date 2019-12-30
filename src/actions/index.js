import store from '../store';

export const removeItem = id => ({ type: 'REMOVE_ITEM', payload: id });

export const addUser = userContent => {
  return {
    type: 'ADD_USER',
    payload: {
      id: store.getState().userId,
      ...userContent,
    },
  };
};

export const toggleCreate = create => ({
  type: 'TOGGLE_CREATE',
  payload: create,
});

export const toggleEdit = edit => ({
  type: 'TOGGLE_EDIT',
  payload: edit,
});

export const editUser = (id, userContent) => ({
  type: 'EDIT_USER',
  payload: { id, ...userContent },
});

export const addPost = postContent => ({
  type: 'ADD_POST',
  payload: {
    id: store.getState().postId,
    ...postContent,
  },
});

export const addComment = commentContent => ({
  type: 'ADD_COMMENT',
  payload: {
    id: store.getState().commentId,
    ...commentContent,
  },
});
