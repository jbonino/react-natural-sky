import React, {Component} from "react";
import classes from "./Lights.scss";
import { connect } from "react-redux";

import Animation from '../../components/Animation/Animation';
import ThreeDayForcast from "../../components/ThreeDayForcast/ThreeDayForcast";
import WeeklySummary from "../../components/WeeklySummary/WeeklySummary";
/* import ThreeHourForcast from '../../components/ThreeHourForcast/ThreeHourForcast'; */

class Lights extends Component {
    
  render() {
    let threeDayForcast = null;
    if (this.props.threeDayLights.dateRange) {
      threeDayForcast = <ThreeDayForcast threeDayLights={this.props.threeDayLights} />;
    }
    let weeklySummary = null;
    if(this.props.weekly.highlights){
      weeklySummary = <WeeklySummary highlights={this.props.weekly.highlights} forcast={this.props.weekly.forcast}/>
    }
    /* let threeHourForcast = null;
    if(this.props.threeHour[0][0][0]){
      threeHourForcast = <ThreeHourForcast threeHour={this.props.threeHour}/>
    } */
    return (
      <div className={classes.container}>
        <h3 style={{ textAlign: "center" }}>Geomagnetic Activity Observation and Forecast</h3>        
        <div className={classes.subGrid}>
          <div><Animation desc={'*This is Northern Ovation'}imgs={["https://services.swpc.noaa.gov/images/animations/ovation-north/latest.jpg?time=1520635932000"]} /></div>
          <div>{threeDayForcast}</div>
        </div>
        <div className={classes.WeeklySummary}>
          {weeklySummary}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    threeDayLights: state.threeDayLights,
    weekly: state.weekly,
    threeHour: state.threeHour
  };
};

export default connect(mapStateToProps)(Lights);
