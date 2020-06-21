import {
  DATE_CHANGE,
  GET_PICTURE_FAILURE,
  GET_PICTURE_REQUEST,
  GET_PICTURE_SUCCESS,
} from '../action';

const initialState = {
  date: null,
  picture: null,
  err: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURE_SUCCESS:
      return {
        ...state,
        picture: action.payload,
      };
    case GET_PICTURE_REQUEST:
      return {
        ...state,
        picture: null,
      };
    case GET_PICTURE_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    case DATE_CHANGE:
      return {
        ...state,
        date: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
