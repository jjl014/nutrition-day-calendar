import { connect } from 'react-redux';
import DateHeader from './date_header';
import { updateCurrentDate } from '../../actions/date_actions';

const mapStateToProps = (state) => ({
  currentDate: state.dates.currentDate,
  todaysDate: state.dates.todaysDate
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentDate: (date) => dispatch(updateCurrentDate(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateHeader);
