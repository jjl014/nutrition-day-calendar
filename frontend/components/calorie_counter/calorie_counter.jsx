import React from 'react';
import GoalCalorieFormContainer from './goal_calorie_form_container';

export default class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateRemaining(goal, food, exercise) {
    let sum = goal - food + exercise;
    return sum > 0 ? sum.toLocaleString() : 0;
  }

  render() {
    const {list, goalCalorie} = this.props;
    let foodCalories = 0;
    let exerciseCalories = 0;
    if (list) {
      Object.keys(list).forEach(key => {
        if (key === "exercise") {
          Object.keys(list[key]).forEach(exercise => {
            exerciseCalories += parseInt(list[key][exercise].calories);
          });
        } else {
          Object.keys(list[key]).forEach(food => {
            foodCalories += parseInt(list[key][food].calories);
          });
        }
      });
    }
    return (
      <div className="calorie-counter-wrapper v-box center">
        {
          goalCalorie ? (
            <div className="calorie-counter h-box">
              <div className="v-box center">
                <h3>{goalCalorie.toLocaleString()}</h3>
                <p>Goal</p>
              </div>
              <p>-</p>
              <div className="v-box center">
                <h3>{foodCalories.toLocaleString()}</h3>
                <p>Food</p>
              </div>
              <p>+</p>
              <div className="v-box center">
                <h3>{exerciseCalories.toLocaleString()}</h3>
                <p>Exercise</p>
              </div>
              <p>=</p>
              <div className="remaining v-box center">
                <h3>{this.calculateRemaining(goalCalorie, foodCalories, exerciseCalories)}</h3>
                <p>Remaining</p>
              </div>
            </div>
          ) : (
            <GoalCalorieFormContainer />
          )
        }
      </div>
    );
  }
}
