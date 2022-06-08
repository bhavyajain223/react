import React from "react";

const EMIAmount = (props) => {
  return (
    <>
      <h5> Amount</h5>
      <div className="emi-box">
        <input type="text" onChange={props.handleClick} value={props.amount} />
      </div>
    </>
  );
};

export default EMIAmount;
