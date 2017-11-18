import { SET_GOAL_CALORIE } from '../actions/calendar_actions';

const Goal = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_GOAL_CALORIE:
      return action.calorie;
    default:
      return state;
  }
};

export default Goal;
