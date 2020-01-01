import store from '../store';
import { ADD_USER, REMOVE_ITEM, TOGGLE_CREATE, EDIT_USER, UPDATE_USER, ADD_POST, ADD_COMMENT } from './types';

export const removeItem = id => ({ type: REMOVE_ITEM, payload: id });

export const addUser = userContent => {
  return {
    type: ADD_USER,
    payload: {
      id: store.getState().userId,
      ...userContent,
    },
  };
};

export const toggleCreate = create => ({
  type: TOGGLE_CREATE,
  payload: create,
});

export const editUser = id => ({
  type: EDIT_USER,
  payload: { id },
});

export const updateUser = (userContent) => ({
  type: UPDATE_USER,
  payload: {...userContent},
});

export const addPost = postContent => ({
  type: ADD_POST,
  payload: {
    id: store.getState().postId,
    ...postContent,
  },
});

export const addComment = commentContent => ({
  type: ADD_COMMENT,
  payload: {
    id: store.getState().commentId,
    ...commentContent,
  },
});
