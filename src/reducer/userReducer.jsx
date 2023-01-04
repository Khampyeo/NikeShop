export const ACTION_USER = {
  USER: 'USER',
  STATUS: 'STATUS',
  TOKEN: 'TOKEN',
  CART: 'CART',
};

export const initialState = {
  user: null,
  status: 'none',
  token: null,
  cart: [],
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_USER.USER:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_USER.TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ACTION_USER.CART:
      return {
        ...state,
        cart: action.payload,
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
