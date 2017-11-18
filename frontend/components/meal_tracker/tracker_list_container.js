import { connect } from 'react-redux';
import TrackerList from './tracker_list';
import { addFood, removeFood } from '../../actions/calendar_actions';

const mapStateToProps = (state, props) => {
  const list = state.calendar[state.dates.currentDate];
  return {
    currentDate: state.dates.currentDate,
    list
  };
};

const mapDispatchToProps = (dispatch) => ({
  addFood: (food) => dispatch(addFood(food)),
  removeFood: (food) => dispatch(removeFood(food))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerList);
