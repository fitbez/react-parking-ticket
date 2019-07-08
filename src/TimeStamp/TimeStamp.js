import React, { Component } from "react";

class TimeStamp extends Component {
  state = {
    clockInTime: " ",
    clockOutTime: " ",
    textIn: " ",
    textOut: " "
  };
  ClockInEventHandler = () => {
    const timeIn = new Date().toLocaleTimeString();
    this.setState({
      clockInTime: timeIn,
      textIn: "Clock In Time: "
    });
  };

  ClockOutEventHandler = () => {
    const timeOut = new Date().toLocaleTimeString();
    this.setState({
      clockOutTime: timeOut,
      textOut: "Clock Out Time: "
    });
  };

  render() {
    return (
      <div>
        <h3>Clock In Time</h3>
        <button onClick={this.ClockInEventHandler}>Clock In</button>
        <button onClick={this.ClockOutEventHandler}>Clock Out</button>

        <p>
          {this.state.textIn}
          {this.state.clockInTime}
        </p>
        <p>
          {this.state.textOut}
          {this.state.clockOutTime}
        </p>
      </div>
    );
  }
}

export default TimeStamp;
