import React from "react";
import classes from "./ThreeDayForcast.scss";
import Table from "../UI/Table/Table";
/* lights reference 
threeDayLights:{
  title: aArray[0].slice(3),
  greatesObserved: aArray[2] + aArray[3],
  greatestExpected: aArray[4] + aArray[5],
  kpBreakdown: aArray[7],
  dateRange: date strings
  dateTable: dateTable,
  rationale: rationale
} */

const threeDayForcast = props => {
  return (
    <div className={classes.container}>
      <p style={{fontWeight:'bold'}}>Three Day Forcast</p>
      <small>{props.threeDayLights.kpBreakdown}</small>
      <div className={classes.Table}>
        <Table headingData={props.threeDayLights.dateRange} tableData={props.threeDayLights.dateTable}/>
      </div>
      {/* dont print rationale: */}
      <p>{props.threeDayLights.rationale.slice(11)}</p>
    </div>
  );
};

export default threeDayForcast;
