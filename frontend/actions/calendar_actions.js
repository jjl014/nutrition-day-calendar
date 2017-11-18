export const ADD_FOOD = "ADD_FOOD";
export const REMOVE_FOOD = "REMOVE_FOOD";
export const SET_GOAL_CALORIE = "SET_GOAL_CALORIE";

export const addFood = (food) => ({
  type: ADD_FOOD,
  food
});

export const removeFood = (food) => ({
  type: REMOVE_FOOD,
  food
});

export const setGoalCalorie = (calorie) => ({
  type: SET_GOAL_CALORIE,
  calorie
});
