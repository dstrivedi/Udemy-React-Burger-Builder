import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        sideDrawerShow : true
    }

    sideDrawerHandler = () => {
        this.setState({sideDrawerShow: false})
    }

    drawerToggleHandler = () => {
        this.setState({sideDrawerShow: !this.state.sideDrawerShow})
    }

    render() {
        return (
            <Aux>
                <Toolbar hideShowSideDrawer = {this.drawerToggleHandler}/>
                <SideDrawer opened={this.state.sideDrawerShow} closed = {this.sideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
export default Layout;
