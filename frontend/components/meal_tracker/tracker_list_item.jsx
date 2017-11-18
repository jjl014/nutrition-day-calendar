import React from 'react';

const TrackerListItem = ({food, removeFood}) => {

  return (
    <li className="tracker-list-item h-box">
      <div className="food-calorie-wrapper h-box">
        <h4>{food.food}</h4>
        <h4>{food.calories}</h4>
      </div>
      <button onClick={removeFood} >Remove</button>
    </li>
  );
};

export default TrackerListItem;
