import React, { Component } from "react";
import "../App.css";

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
      <div className="card">
        <div>
          <h3>Parking Ticket</h3>
          <h2>{this.props.ticket}</h2>
          <button className="button" onClick={this.ClockInEventHandler}>
            Clock In
          </button>
          <button className="button" onClick={this.ClockOutEventHandler}>
            Clock Out
          </button>
          <p>
            {this.state.textIn}
            {this.state.clockInTime}
          </p>
          <p>
            {this.state.textOut}
            {this.state.clockOutTime}
          </p>
        </div>
      </div>
    );
  }
}

export default TimeStamp;
