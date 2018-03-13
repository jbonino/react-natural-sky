import React, {Component} from "react";
import { connect } from "react-redux";
import classes from "./Solar.scss";


class Solar extends Component {
  state={
    currentAnimaiton: {desc: 'X-Ray', src:'https://services.swpc.noaa.gov/images/animations/GOES-14-CS-PTHNA-0.4/latest.png'},
    pendingAnimations:[
      {desc: 'Solar', src:'https://services.swpc.noaa.gov/images/animations/sdo-hmii/latest.jpg'},
      {desc: 'lasco', src:'https://services.swpc.noaa.gov/images/animations/lasco-c3/latest.jpg'},
    ]
  }
    
  render() {
    let blackout = null;
    if(this.props.threeDayRadio.blackout!==''){
      blackout = <p>{this.props.threeDayRadio.blackout}</p>;
    }
    let rationale = null;
    if(this.props.threeDayRadio.blackout!==''){
      rationale = <p>{this.props.threeDayRadio.rationale}</p>;
    }
    return (
      <div className={classes.container}>
        <h3 style={{ textAlign: "center" }}>Solar Radiation Activity Observation and Forecast</h3>        
        <div className={classes.subGrid}>
          <div>ji</div>
          <div>sd</div>
        </div>
        <div className={classes.Bottom}>
          <div>{blackout}</div>
          <div>{rationale}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    threeDayRadio: state.threeDayRadio
  };
};

export default connect(mapStateToProps)(Solar);
