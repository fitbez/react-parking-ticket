import React, { Component } from "react";
import Ticket from "./Ticket/Ticket";
import "./App.css";

class App extends Component {
  state = {
    clockInTime: " ",
    clockOutTime: " "
  };
  ClockInEventHandler = () => {
    const timeIn = new Date().toLocaleTimeString();
    this.setState({
      clockInTime: timeIn
    });
  };

  ClockOutEventHandler = () => {
    const timeOut = new Date().toLocaleTimeString();
    this.setState({
      clockOutTime: timeOut
    });
  };

  render() {
    return (
      <div className="App">
        <Ticket
          clockOutTime={this.state.clockOutTime}
          clockInTime={this.state.clockInTime}
          clickIn={this.ClockInEventHandler}
          clickOut={this.ClockOutEventHandler}
        />
      </div>
    );
  }
}

export default App;
