export const ACTION_USER = {
  USER: 'USER',
  STATUS: 'STATUS'
};

export const initialState = {
  user: null,
  status: 'none'
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_USER.USER:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_USER.STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
