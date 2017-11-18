import { connect } from 'react-redux';
import GoalCalorieForm from './goal_calorie_form';
import { setGoalCalorie } from '../../actions/calendar_actions';

const mapDispatchToProps = (dispatch) => ({
  setGoalCalorie: (calorie) => dispatch(setGoalCalorie(calorie))
});

export default connect(
  null,
  mapDispatchToProps
)(GoalCalorieForm);
