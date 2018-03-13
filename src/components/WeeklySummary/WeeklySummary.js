import React from "react";
import classes from "./WeeklySummary.scss";

const weeklySummary = props => {
  //TODO: format text to have \n and tabs
  return (
    <div className={classes.container}>
      <div>
        <h4>Weekly Highlights</h4>
        <p>{props.highlights}</p>
      </div>
      <div>
        <h4>Weekly Forcast</h4>
        <p>{props.forcast}</p>
      </div>
    </div>
  );
};

export default weeklySummary;
