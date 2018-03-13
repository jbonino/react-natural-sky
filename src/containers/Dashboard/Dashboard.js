import React, { PureComponent } from "react";
import classes from "./Dashboard.scss";
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import Lights from '../Lights/Lights';
import Solar from '../Solar/Solar';
import * as actions from '../../store/actions/index';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axiosSWPC from '../../api/axios-swpc';
import banner from '../../assets/images/dashboard_banner.png'

class Dashboard extends PureComponent {
  componentDidMount(){
    console.log('[Dashboard Component] init all the good stuff');
    this.props.initThreeday();
    this.props.initWeeklySummary();
    this.props.initAlerts();
    this.props.initThreehour();
    /* TODO: rerender after each method, do all in one method */
    //this.props.all();

  }

  buttonHandler = () =>{
    if(this.props.alerts)
      alert(this.props.alerts[0].alert);
  }

  render() {
    return (
      <div className={classes.Container}>
        {/* TODO:: Style alerts */}
        {/* <div><button onClick={this.buttonHandler}>Alerts</button></div>         */}
        <div className={classes.Banner}>
          {/* <img src={banner}alt="northern lights banner"/> */}
        </div>
        <div className={classes.Nav}>
          <NavLink to={this.props.match.path+'/lights'} activeClassName={classes.active} exact>Lights</NavLink>
          <NavLink to={this.props.match.path+'/solar'} activeClassName={classes.active} exact>Solar</NavLink>
          <NavLink to={this.props.match.path+'/education'} activeClassName={classes.active} exact>Education</NavLink>
        </div>
        <div className={classes.Child}>
        <Switch>
          <Route exact path={this.props.match.path+'/lights'} component={Lights}/>}/>
          <Route exact path={this.props.match.path+'/solar'} component={Solar} />
          <Route exact path={this.props.match.path+'/education'}/>
          <Redirect exact from={this.props.match.path+'/'} to={this.props.match.path+'/lights'} />
          <Redirect from={this.props.match.path+'/'} to="/not-found" />
        </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    error: state.error,
    alerts: state.alerts
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    initThreeday: ()=> dispatch(actions.getThreedayForcast()),
    initWeeklySummary: ()=> dispatch(actions.getWeeklySummary()),
    initAlerts: ()=> dispatch(actions.getAlerts()),
    initThreehour: ()=> dispatch(actions.getThreehourForcast()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(errorHandler(Dashboard,axiosSWPC));
