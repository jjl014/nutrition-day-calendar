const _defaultState = {
  todaysDate: new Date().toString().slice(0,15)
};

const DateReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default DateReducer;
