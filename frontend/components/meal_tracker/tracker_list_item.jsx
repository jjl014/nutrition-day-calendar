import React from 'react';

const TrackerListItem = ({food, removeFood}) => {

  return (
    <li className="tracker-list-item">
      {food.food} {food.calories}
      <button onClick={removeFood} >Remove</button>
    </li>
  );
};

export default TrackerListItem;
