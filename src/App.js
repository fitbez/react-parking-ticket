import React, { Component } from "react";
import TimeStamp from "./TimeStamp/TimeStamp";
import "./App.css";

class App extends Component {
  state = {
    showComponent: [],
    ticketNumber: 0
  };

  tickets = [];
  ticketNumber = 0;

  // Event Handler function
  ticketIssueHandler = () => {
    let ticket = this.ticketNumber++;
    this.tickets.push(<TimeStamp ticket={this.ticketNumber - 1} />);
    this.setState({
      showComponent: this.tickets,
      ticketNumber: ticket
    });
    // console.log(this.ticketNumber);
    console.log(this.tickets.length);
  };

  render() {
    return (
      <div className="App">
        <div>
          <button className="button" onClick={this.ticketIssueHandler}>
            <h2>Issue Parking Ticket</h2>
          </button>
        </div>
        <div>{this.state.showComponent}</div>
      </div>
    );
  }
}

export default App;
