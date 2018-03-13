import React from 'react';
import classes from './Spinner.scss'

const spinner = (props) => {
    return (
        <div className={classes.spinner}>
            <div className={classes.doublebounce1}></div>
            <div className={classes.doublebounce2}></div>
        </div>
    );
};

export default spinner;