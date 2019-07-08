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
      <div
        className="card"
        style={{
          border: "1px solid #eee",
          width: "25%",
          margin: "16px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "5px"
        }}
      >
        <div>
          <h3>Clock In Time</h3>
          <button
            style={{
              width: "120px",
              height: "30px",
              border: "1px solid #f4f4f4",
              backgroundColor: "#009688",
              margin: "8px",
              color: "#ffffff"
            }}
            onClick={this.ClockInEventHandler}
          >
            Clock In
          </button>
          <button
            style={{
              width: "120px",
              height: "30px",
              border: "1px solid #f4f4f4",
              backgroundColor: "#009688",
              margin: "16px",
              color: "#ffffff"
            }}
            onClick={this.ClockOutEventHandler}
          >
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
