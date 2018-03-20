import React from "react";
import classes from './NatComp.scss'

const NatComp = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.subtitle}>{props.subtitle}</div>
      <div className={classes.hint}>{props.hint}</div>
      {props.children}
    </div>
  );
};

export default NatComp;
