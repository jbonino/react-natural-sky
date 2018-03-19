import React from 'react';
import classes from './Card.scss';
import galaxy from '../../../assets/images/galaxy.jpg';
import star from '../../../assets/images/star.jpg';
import planet from '../../../assets/images/planet.jpg';

const card = (props) => {
  let img = null;
  switch(props.type){
    case 'star': img=star; break;
    case 'planet': img=planet; break;
    default: img=galaxy;
  } 
  return (    
    <div className={classes.container}>
      <div className={classes.head}><img src={img} alt={props.type}/></div>
      <div className={classes.body}> <p>{props.name}</p> </div>
    </div>
  );
};

export default card;