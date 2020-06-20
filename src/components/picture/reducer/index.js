import { callAPI } from '../../../common/api/callAPI';
import { GET_PICTURE } from '../constants';

const initialState = {
  picture: null,
};

const pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURE:
      return {
        ...state,
        picture: action.response.url,
      };
    default:
      return state;
  }
};

export const getPicture = (fullDate) => {
  return (dispatch) => {
    callAPI(fullDate).then((response) => {
      dispatch({ type: GET_PICTURE, response });
    });
  };
};

export default pictureReducer;
