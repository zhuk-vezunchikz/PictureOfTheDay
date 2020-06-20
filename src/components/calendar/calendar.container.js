import ReactCalendar from './calendar.component';
import { connect } from 'react-redux';
import { getPicture } from '../picture/reducer';

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getPicture })(ReactCalendar);
