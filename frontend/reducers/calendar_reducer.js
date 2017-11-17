import { combineReducers } from 'redux';
import { ADD_FOOD } from '../actions/calendar_actions';

const CalendarReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action) {
    case ADD_FOOD:
      Object.assign(
        {},
        state,
        {
          [action.date]: {
            [action.meal]: {
              [action.food]: action.calorie
            }
          }
        }
      );
    default:
      return state;
  }
};

export default CalendarReducer;
