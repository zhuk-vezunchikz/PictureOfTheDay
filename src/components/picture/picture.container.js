import Picture from './picture.component';
import { connect } from 'react-redux';
import { getPicture } from './reducer';

const mapStateToProps = (state) => {
  return {
    picture: state.pictureState.picture,
  };
};

export default connect(mapStateToProps, { getPicture })(Picture);
