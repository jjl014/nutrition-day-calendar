import { connect } from 'react-redux';
import CalorieCounter from './calorie_counter';

const mapStateToProps = (state) => {
  const { calendar, goalCalorie } = state;
  const list = calendar[state.dates.currentDate];
  return {
    list,
    goalCalorie
  };
};

export default connect(
  mapStateToProps,
  null
)(CalorieCounter);
