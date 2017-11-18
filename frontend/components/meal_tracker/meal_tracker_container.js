import { connect } from 'react-redux';
import MealTracker from './meal_tracker';

const mapStateToProps = (state) => ({
  goalCalorie: state.goalCalorie
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealTracker);
