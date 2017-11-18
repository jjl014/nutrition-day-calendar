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

  displayDate() {
    const {currentDate, todaysDate} = this.props;
    const tomorrow = this.newDate(todaysDate, true);
    const yesterday = this.newDate(todaysDate, false);
    switch(currentDate) {
      case tomorrow:
        return "Tomorrow";
      case yesterday:
        return "Yesterday";
      case todaysDate:
        return "Today";
      default:
        return getPrettyDate(currentDate);
    }
  }

  render() {
    return (
      <div className="date-header h-box">
        <div className="date-header-btn">
          <i onClick={this.handleNavigate("prev")}
            className="fa fa-chevron-circle-left chevron"
            aria-hidden="true"></i>
        </div>
        <h1>{this.displayDate()}</h1>
        <div className="date-header-btn">
          <i onClick={this.handleNavigate("next")}
            className="fa fa-chevron-circle-right chevron"
            aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
