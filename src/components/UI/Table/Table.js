import React from "react";
import classes from "./Table.scss";

/* 
props expecting 'array' named 'tableData' where: 
  each index: array of 4 ex:(date, int, int ,int) 

props expecting 'array' named 'headingData' where: 
  each index: string ex:'heading'
*/

const twenty = props => {
  const table = (
    <table>
      <tbody>
        {createTableHeadings(props.headingData)}
        {createTableRows(props.tableData)}
      </tbody>
    </table>
  );
  return <div className={classes.container}>{table}</div>;
};

//retuns jsx
const createTableHeadings = headingData => {
  const jsxTHs = [[]];
  for (let i in headingData) {
    jsxTHs[0].push(<th key={headingData[i]}>{headingData[i]}</th>);
  }
  return <tr>{jsxTHs}</tr>;
};
const createTableRows = tableData => {
  const jsxTRs = [];
  for (let i in tableData) {
    const jsxTDs = [];
    for (let j in tableData[i]) {
      jsxTDs.push(<td key={j}>{tableData[i][j]}</td>);
    }
    jsxTRs.push(<tr key={i}>{jsxTDs}</tr>);
  }
  return jsxTRs;
};

export default twenty;
