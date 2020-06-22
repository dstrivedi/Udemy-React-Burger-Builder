import React from 'react';
import classes from './NavigationItem.css';
import PropTypes from 'prop-types';

const navigationItem = (props) => (
    <li className={classes.Item}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
)

navigationItem.propTypes = {
    link: PropTypes.string,
    active: PropTypes.bool
}

export default navigationItem;