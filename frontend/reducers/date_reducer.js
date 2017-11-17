import { getTodaysDate } from '../util/date_util';
import { UPDATE_CURRENT_DATE } from '../actions/date_actions';

const _defaultState = {
  todaysDate: getTodaysDate(),
  currentDate: getTodaysDate()
};

const DateReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_CURRENT_DATE:
      return Object.assign({}, state, {"currentDate": action.date});
    default:
      return state;
  }
};

export default DateReducer;
