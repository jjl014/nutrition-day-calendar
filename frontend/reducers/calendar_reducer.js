import { ADD_FOOD, REMOVE_FOOD } from '../actions/calendar_actions';
import merge from 'lodash/merge';

const CalendarReducer = (state = {}, action) => {
  Object.freeze(state);
  let timestamp;
  let newState = merge({}, state);
  const {food} = action;
  switch(action.type) {
    case ADD_FOOD:
      timestamp = new Date().getTime();
      return merge(newState, {
        [food.date]: {
          [food.meal]: {
            [`${food.meal}-${timestamp}`]: {
              food: food.food,
              calories: food.calories
            }
          }
        }
      });
    case REMOVE_FOOD:
      delete newState[food.date][food.type][food.foodKey];
      return newState;
    default:
      return state;
  }
};

export default CalendarReducer;
