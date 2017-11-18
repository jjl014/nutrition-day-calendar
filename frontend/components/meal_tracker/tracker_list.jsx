import React from 'react';
import TrackerListItem from './tracker_list_item';

export default class TrackerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewItem: false,
      food: "",
      calories: ""
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.currentDate !== this.props.currentDate) {
      this.setState({addNewItem: false});
    }
  }

  toggleForm() {
    return () => {
      this.setState({addNewItem: true});
    };
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  formatFood(food) {
    const foodParts = food.split(" ").map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return foodParts.join(" ");
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      const {type, currentDate} = this.props;
      const {food, calories} = this.state;
      if (/(\d+)/.test(food) || food.trim() === "" || calories === "") return;
      const newFood = {
        date: currentDate,
        meal: type,
        food: this.formatFood(food),
        calories
      };
      this.props.addFood(newFood);
    };
  }

  handleCancel() {
    return (e) => {
      e.preventDefault();
      this.setState({
        addNewItem: false,
        food: "",
        calories: ""
      });
    };
  }

  renderFoodForm () {
    if (this.state.addNewItem) {
      return (
        <form className="new-food-form">
          <label htmlFor="food">{this.props.type === "exercise" ? "Exercise" : "Food"}</label>
          <input onChange={this.handleChange("food")} autoComplete="off" id="food" type="text"></input>
          <label htmlFor="calories">Calories</label>
          <input onChange={this.handleChange("calories")} autoComplete="off" id="calories" type="number"></input>
          <button onClick={this.handleSubmit()}>Add</button>
          <button onClick={this.handleCancel()}>Cancel</button>
        </form>
      );
    }
  }

  renderFoodList() {
    const {type, list, currentDate} = this.props;
    let foodList;
    if (list && list[type]) {
      foodList = Object.keys(list[type]).map((k, i) => {
        const food = list[type][k];
        return (
          <TrackerListItem
            key={`${type}-${i}`}
            food={food}
            removeFood={this.removeFromList(currentDate, type, k)}/>
        );
      });
    }
    return foodList;
  }

  removeFromList(date, type, foodKey) {
    return () => {
      this.props.removeFood({date, type, foodKey});
    };
  }

  render() {
    const {type, list} = this.props;
    let listType = type[0].toUpperCase() + type.slice(1);
    return (
      <div className={`${type} tracker-list`}>
        <div className="section-header h-box">
          <h2>{listType}</h2>
          <i onClick={this.toggleForm()} className="fa fa-plus add-btn" aria-hidden="true"></i>
        </div>
        <ul className="food-list">
          {this.renderFoodList()}
        </ul>
        {this.renderFoodForm()}
      </div>
    );
  }
}
