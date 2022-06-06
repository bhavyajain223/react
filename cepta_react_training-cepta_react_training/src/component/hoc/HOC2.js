import React from "react";
import withHoc from "./HOC";

const cities = [
  "banglore",
  "noida",
  "chandigarh",
  "pune",
  "shimla",
  "shillong",
];

const HOC2 = (props) => {
  return (
    <>
      <h4>Data from Filter -2</h4>

      {props.dataRet && props.dataRet.map((item) => <div>{item}</div>)}
    </>
  );
};

export default withHoc(HOC2, cities);
