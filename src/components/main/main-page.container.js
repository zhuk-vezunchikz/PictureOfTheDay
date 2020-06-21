import MainPage from './main-page.component';
import { connect } from 'react-redux';
import { getPicture } from './thunk/picture.service';
import { dateChange } from './action';

let formatDate = (date) => {
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  let day = date.getDate();
  if (day < 10) day = '0' + day;

  let year = date.getFullYear();

  return year + '-' + month + '-' + day;
};

const mapStateToProps = (state) => {
  return {
    picture: state.mainState.picture,
    date: state.mainState.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dateChange: (date) => {
      const fDate = formatDate(date);
      const updatedPicture = JSON.parse(localStorage.getItem('picture')) || {};
      updatedPicture.date = fDate;
      localStorage.setItem('picture', JSON.stringify(updatedPicture));
      dispatch(dateChange(fDate));
    },
    getPicture: (date) => {
      dispatch(getPicture(date));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
