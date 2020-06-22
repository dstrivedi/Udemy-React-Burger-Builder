import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.hideShow}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;