import React from 'react';
import { getPrettyDate, changeDate } from '../../util/date_util';

export default class DateHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  newDate(dateStr, bool) {
    // increment date if true else decrement date
    if (bool) {
      return changeDate(dateStr, 1);
    } else {
      return changeDate(dateStr, -1);
    }
  }

  handleNavigate(dir) {
    return (e) => {
      e.preventDefault();
      if (dir === "prev") {
        this.props.updateCurrentDate(this.newDate(this.props.currentDate, false));
      } else {
        this.props.updateCurrentDate(this.newDate(this.props.currentDate, true));
      }
    };
  }

  render() {
    const {currentDate} = this.props;
    return (
      <div className="date-header h-box">
        <button onClick={this.handleNavigate("prev")}>Prev</button>
        <h2>{getPrettyDate(currentDate)}</h2>
        <button onClick={this.handleNavigate("next")}>Next</button>
      </div>
    );
  }
}
