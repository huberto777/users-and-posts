import {
  ADD_USER,
  REMOVE_ITEM,
  TOGGLE_CREATE,
  UPDATE_USER,
  ADD_POST,
  ADD_COMMENT,
} from 'actions/types';

const initialState = {
  create: false,
  userId: 3,
  postId: 3,
  commentId: 4,
  auth: [{ login: 'admin', password: 'qwerty' }],
  users: [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+48785524236',
      address: 'Reymonta 22, Cracow, district Malopolska',
    },
    {
      id: 2,
      name: 'Mark',
      surname: 'Carpenter',
      email: 'mark@op.pl',
      phone: '+4878552933236',
      address: 'Lea street, Cracow, district Malopolska',
    },
  ],
  posts: [
    {
      id: 1,
      title: 'new title',
      content: 'new all content for new design i the new itemm bar new item bar, redux and react',
      userId: 1,
    },
    { id: 2, title: 'all title', content: 'all all content', userId: 1 },
  ],
  comments: [
    {
      id: 1,
      body: 'comments to post nr 1',
      name: 'John',
      email: 'john.doe@exampole.com',
      postId: 1,
    },
    {
      id: 2,
      body: 'comments to post nr 2',
      name: 'Józek',
      email: 'jozek@example.com',
      postId: 2,
    },
    {
      id: 3,
      body: 'new comments to post nr 2',
      name: 'Zenek',
      email: 'zenek@exampole.com',
      postId: 2,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        users: [...state.users.filter(item => item.id !== action.payload)],
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        create: !state.create,
        userId: state.userId + 1,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        create: !state.create,
        postId: state.postId + 1,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        create: false,
        commentId: state.commentId + 1,
      };
    case TOGGLE_CREATE:
      return {
        ...state,
        create: !state.create,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => (user.id !== action.payload.id ? user : action.payload)),
      };

    default:
      return state;
  }
};

export default rootReducer;
