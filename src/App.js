import React, { Component } from "react";
import TimeStamp from "./TimeStamp/TimeStamp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeStamp />
        <TimeStamp />
      </div>
    );
  }
}

export default App;
