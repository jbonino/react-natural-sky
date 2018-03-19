import React from 'react';
import {Link} from 'react-router-dom'
import classes from './NatHeader.scss';

const NatHeader = () => {
  return (
    <div className={classes.container}>
      <h1>Natural Sky</h1>
      <p>Find your dream time exposer with our predictions...</p>
      <Link to={'/dashboard'}> Dashboard </Link>
    </div>
  );
};

export default NatHeader;