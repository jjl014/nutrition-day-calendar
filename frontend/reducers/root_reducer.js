import { combineReducers } from 'redux';
import DateReducer from './date_reducer';

const RootReducer = combineReducers({
  dates: DateReducer
});

export default RootReducer;
