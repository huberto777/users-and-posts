const initialState = {
  create: false,
  edit: false,
  userId: 3,
  postId: 3,
  commentId: 4,
  users: [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+48785524236',
      address: 'ul. Nowa 27, Kraków',
    },
    {
      id: 2,
      name: 'Mark',
      surname: 'Carpenter',
      email: 'mark@op.pl',
      phone: '+4878552933236',
      address: 'os. Złotego Wieku 55/55 31-622 Kraków',
    },
  ],
  posts: [
    {
      id: 1,
      title: 'new title',
      content: 'new all content for new design i teh ne w itemm bar new item bar, redux and react',
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
    case 'REMOVE_ITEM':
      return {
        ...state,
        users: [...state.users.filter(item => item.id !== action.payload)],
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        create: !state.create,
        userId: state.userId + 1,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
        create: !state.create,
        postId: state.postId + 1,
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload],
        create: !state.create,
        commentId: state.commentId + 1,
      };
    case 'TOGGLE_CREATE':
      return {
        ...state,
        create: !state.create,
      };
    case 'TOGGLE_EDIT':
      return {
        ...state,
        edit: !state.edit,
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id !== action.payload.id) {
            return user;
          }
          return { ...user, name: action.payload.name };
        }),
        edit: !state.edit,
      };
    default:
      return state;
  }
};

export default rootReducer;
