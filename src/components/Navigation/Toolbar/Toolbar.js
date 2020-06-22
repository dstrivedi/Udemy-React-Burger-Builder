import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import PropTypes from 'prop-types';

const toolbar = (props) => (
    <header className={classes.Toolbar}>    
        <DrawerToggle hideShow = {props.hideShowSideDrawer}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

toolbar.propTypes = {
    hideShowSideDrawer: PropTypes.func
}

export default toolbar;
