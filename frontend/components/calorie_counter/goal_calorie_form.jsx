import React from 'react';

export default class GoalCalorieForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      goalCalorie: ""
    };
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      if (this.state.goalCalorie.trim() === "") return;
      this.props.setGoalCalorie(parseInt(this.state.goalCalorie));
    };
  }

  handleChange() {
    return (e) => {
      this.setState({goalCalorie: e.target.value});
    };
  }

  render() {
    return (
      <form className="goal-calorie-form h-box">
        <h3>Enter Your Calorie Goal</h3>
        <input
          onChange={this.handleChange()}
          placeholder="Calories"
          type="number"></input>
        <button className="goal-submit-btn" onClick={this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}
