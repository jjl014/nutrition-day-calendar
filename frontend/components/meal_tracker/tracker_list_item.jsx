import React from 'react';

const TrackerListItem = ({food, removeFood}) => {

  return (
    <li className="tracker-list-item h-box">
      <div className="food-calorie-wrapper h-box">
        <h4>{food.food}</h4>
        <h4>{food.calories}</h4>
      </div>
      <div className="close-btn-wrapper center">
        <i onClick={removeFood} className="fa fa-times close-btn" aria-hidden="true"></i>
      </div>
    </li>
  );
};

export default TrackerListItem;
