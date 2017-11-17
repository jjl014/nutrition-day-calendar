import { combineReducers } from 'redux';
import DateReducer from './date_reducer';
import GoalReducer from './goal_reducer';
import CalendarReducer from './calendar_reducer';

const RootReducer = combineReducers({
  dates: DateReducer,
  goalCalorie: GoalReducer,
  calendar: CalendarReducer
});

export default RootReducer;
