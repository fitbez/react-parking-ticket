import React from "react";

const Ticket = props => {
  return (
    <div>
      <div>
        <h3>Ticket Number:</h3>
        <div>
          <p>00-000</p>
        </div>
      </div>
      <div>
        <button onClick={props.clickIn}>Clock In</button>
        <button onClick={props.clickOut}>Clock Out</button>
        <p>clock in time: {props.clockInTime}</p>
        <p>clock out time: {props.clockOutTime}</p>
      </div>
    </div>
  );
};

export default Ticket;
