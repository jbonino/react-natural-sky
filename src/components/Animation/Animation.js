import React from "react";
import classes from './Animation.scss'

/* 
props Expecting array of 'imgs' where:
  each el: string ex: 'https://services.swpc.noaa.gov/images/animations/GOES-14-CS-PTHNA-0.4/latest.png'

props Expecting string of 'desc' ex: 'this is northern ovation'
*/
const animation = props => {
  return (
    <div className={classes.GeoAnimation}>
      <img src={props.imgs[0]} alt="Animation" />
      <p> {props.desc} </p>
    </div>
  );
};

export default animation;
