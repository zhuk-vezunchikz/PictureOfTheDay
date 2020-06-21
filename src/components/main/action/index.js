export const GET_PICTURE_REQUEST = 'GET_PICTURE_REQUEST';
export const GET_PICTURE_SUCCESS = 'GET_PICTURE_SUCCESS';
export const GET_PICTURE_FAILURE = 'GET_PICTURE_FAILURE';

export const DATE_CHANGE = 'DATE_CHANGE';

export const pictureRequest = () => {
  return {
    type: GET_PICTURE_REQUEST,
  };
};

export const pictureSuccess = (url) => {
  return {
    type: GET_PICTURE_SUCCESS,
    payload: url,
  };
};

export const pictureFailure = (error) => {
  return {
    type: GET_PICTURE_FAILURE,
    payload: error,
  };
};

export const dateChange = (date) => {
  return {
    type: DATE_CHANGE,
    payload: date,
  };
};
