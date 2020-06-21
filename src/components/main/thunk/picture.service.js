import { callAPI } from '../../../common/api/callAPI';
import { pictureFailure, pictureRequest, pictureSuccess } from '../action';



export const getPicture = (fullDate) => {
  return (dispatch) => {
    dispatch(pictureRequest());
    callAPI(fullDate)
      .then((response) => {
        dispatch(pictureSuccess(response.url));
      })
      .catch((err) => {
        dispatch(pictureFailure(err));
      });
  };
};
