import React from 'react';
import TrackerListContainer from './tracker_list_container';

export default class MealTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="meal-tracker">
        <TrackerListContainer type={"breakfast"} />
        <TrackerListContainer type={"lunch"}/>
        <TrackerListContainer type={"dinner"}/>
        <TrackerListContainer type={"snacks"}/>
        <TrackerListContainer type={"exercise"}/>
      </div>
    );
  }
}
