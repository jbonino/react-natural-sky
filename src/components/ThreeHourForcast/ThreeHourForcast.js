import React, {Component} from "react";
import classes from "./ThreeHourForcast.scss";
/* this.props expecting
3d array expecting
threeHour: [day][forcast]['day time', 'kp-index', 'observed|estimated|predicted', 'noaa_scale']
   */
class ThreeHourForcast extends Component{
  state={
    indexDay: 0,
  }

  jsxTableRows = () =>{
    const tableRows = [];
    tableRows.push(<tr key="header"><th>Time</th><th>kp-index</th><th>Analysis</th><th>NOAA Scale</th></tr>);
    //loop through day held by state (indexDay)
    for(let i in this.props.threeHour[this.state.indexDay]){
      tableRows.push(
        //key is day&time
        <tr key={this.props.threeHour[this.state.indexDay][i][0]}>
          <td>{this.props.threeHour[this.state.indexDay][i][0].slice(11)}</td>
          <td>{this.props.threeHour[this.state.indexDay][i][1]}</td>
          <td>{this.props.threeHour[this.state.indexDay][i][2]}</td>
          <td>{this.props.threeHour[this.state.indexDay][i][3]}</td>
        </tr>)
    }
    return tableRows;
  }

  incrementIndexDay = () =>{
    //if index is less than length and greater than or equal to 0
    if(this.state.indexDay < ((this.props.threeHour.length) - 1) && this.state.indexDay >= 0){
      this.setState((prevState, props) => {
        return {indexDay: prevState.indexDay + 1};
      });
    }
  }
  decrementIndexDay = () =>{
    if(this.state.indexDay<=this.props.threeHour.length && this.state.indexDay>0){
      this.setState((prevState, props) => {
        return {indexDay: prevState.indexDay - 1};
      });
    }
  }

  render(){
  const left = "<";
  const right = ">";
  const tableRows = this.jsxTableRows();
  return (
    <div className={classes.container}>
      <button onClick={this.decrementIndexDay}> {left} </button>
      <div>
      <h3 style={{ textAlign: "center" }}>Three Hour Forcast</h3>        
        <h4 style={{ textAlign: "center" }}>
          {this.props.threeHour[this.state.indexDay][0][0].slice(0, 10)}
        </h4>
        <table><tbody>
          {tableRows}  
        </tbody></table>
      </div>
      <button onClick={this.incrementIndexDay}> {right} </button>
    </div>
  );
 }
};

export default ThreeHourForcast;
