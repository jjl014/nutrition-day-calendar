import React from 'react';

export default class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);
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
      <div className="calorie-counter v-box">
        <div className="h-box">
          <h2>food: {foodCalories}</h2>
          <h2>exercise: {exerciseCalories}</h2>
          <h2>total: {foodCalories - exerciseCalories}</h2>
        </div>
      </div>
    );
  }
}
