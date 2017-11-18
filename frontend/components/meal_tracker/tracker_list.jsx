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
      this.setState({addNewItem: true}, () => {
        document.querySelector(`.${this.props.type}`).childNodes[2].childNodes[0].focus();
      });
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
      this.setState({food: "", calories: ""});
      document.querySelector(`.${type}`).childNodes[2].childNodes[0].focus();
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
  // <label htmlFor="food">{this.props.type === "exercise" ? "Exercise" : "Food"}</label>
  // <label htmlFor="calories">Calories</label>

  renderFoodForm () {
    if (this.state.addNewItem) {
      return (
        <form className="new-food-form">
          <input
            onChange={this.handleChange("food")}
            autoComplete="off"
            id="food"
            placeholder={this.props.type === "exercise" ? "Exercise" : "Food"}
            type="text"
            value={this.state.food}></input>
          <input
            onChange={this.handleChange("calories")}
            autoComplete="off"
            id="calories"
            placeholder={this.props.type === "exercise" ? "Calories Burned" : "Calories"}
            type="number"
            value={this.state.calories}></input>
          <div className="food-form-btn-wrapper h-box">
            <div className="form-btn-wrapper center">
              <i onClick={this.handleSubmit()} className="fa fa-check-circle food-form-btn submit-btn" aria-hidden="true"></i>
            </div>
            <div className="form-btn-wrapper center">
              <i onClick={this.handleCancel()} className="fa fa-times-circle food-form-btn cancel-btn" aria-hidden="true"></i>
            </div>
            <button onClick={this.handleSubmit()} className="form-submit-btn"></button>
          </div>
        </form>
      );
    }
  }
  // <button onClick={this.handleCancel()} className="cancel-btn">Cancel</button>

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

  calculateMealCalories() {
    const {list, type} = this.props;
    if (!list) return 0;
    let sum = 0;
    for (let food in list[type]) {
      sum += parseInt(list[type][food].calories);
    }
    return sum;
  }

  render() {
    const {list, type} = this.props;
    let listType = type[0].toUpperCase() + type.slice(1);
    return (
      <div className={`${type} tracker-list`}>
        <div className="section-header h-box">
          <div className="header-calorie h-box">
            <h2>{listType}</h2>
            <h2>{this.calculateMealCalories()}</h2>
          </div>
          <div className="add-btn-wrapper center">
            <i onClick={this.toggleForm()} className="fa fa-plus add-btn" aria-hidden="true"></i>
          </div>
        </div>
        <ul className="food-list">
          {this.renderFoodList()}
        </ul>
        {this.renderFoodForm()}
      </div>
    );
  }
}
