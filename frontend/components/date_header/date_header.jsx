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
        return (
          <div className="date v-box"><h1>{getPrettyDate(tomorrow)}</h1><p>Tomorrow</p></div>
        );
      case yesterday:
        return (
          <div className="date v-box"><h1>{getPrettyDate(yesterday)}</h1><p>Yesterday</p></div>
        );
      case todaysDate:
        return (
          <div className="date v-box"><h1>{getPrettyDate(todaysDate)}</h1><p>Today</p></div>
        );
      default:
        return <h1>{getPrettyDate(currentDate)}</h1>;
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
        {this.displayDate()}
        <div className="date-header-btn">
          <i onClick={this.handleNavigate("next")}
            className="fa fa-chevron-circle-right chevron"
            aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
