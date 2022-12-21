export const ACTION_DETAIL_ITEM = {
    DATA_SHOE: 'DATA_SHOE',
    IMG:'IMG'
  };
  
  export const initialState = {
    data: null,
    img: null,
  };
  
  export const reducerDetailItem = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_DETAIL_ITEM.DATA_SHOE:
        return {
          ...state,
          data: action.payload,
        };
      case ACTION_DETAIL_ITEM.IMG:
        return {
          ...state,
          img: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };
  