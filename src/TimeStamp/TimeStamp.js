import React, { Component } from "react";
import "../App.css";

class TimeStamp extends Component {
  state = {
    clockInTime: " ",
    clockOutTime: " ",
    textIn: " ",
    textOut: " ",
    totalHour: 0,
    textHour: ""
  };

  timeIn;
  timeOut;
  timeOne;
  timeTwo;

  ClockInEventHandler = () => {
    this.timeIn = new Date().toLocaleTimeString();
    this.timeOne = new Date();
    this.setState({
      clockInTime: this.timeIn,
      textIn: <strong>Clock In Time: </strong>
    });
  };

  ClockOutEventHandler = () => {
    this.timeOut = new Date().toLocaleTimeString();
    this.timeTwo = new Date();
    let hours = 1000 * 60 * 60;
    this.diff = this.timeTwo - this.timeOne;
    this.totalHour = Math.floor(this.diff / hours);
    this.setState({
      clockOutTime: this.timeOut,
      textOut: <strong>Clock Out Time: </strong>,
      totalHours: this.totalHour,
      textHour: <strong>Total Hour: </strong>
    });
    console.log(this.timeOut);
  };

  render() {
    return (
      <div className="card">
        <div>
          <h3>Parking Ticket</h3>
          <h2 style={{ color: "red" }}>{this.props.ticket}</h2>
          <button className="button" onClick={this.ClockInEventHandler}>
            Clock In
          </button>
          <button className="button" onClick={this.ClockOutEventHandler}>
            Clock Out
          </button>
          <div>
            <p>
              {this.state.textIn}
              {this.state.clockInTime}
            </p>
          </div>
          <div>
            <p>
              {this.state.textOut}
              {this.state.clockOutTime}
            </p>
            <p>
              {this.state.textHour}
              {this.state.totalHour} hr
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeStamp;
