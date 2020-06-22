import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nexxtState) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log("Model.js will update")
    }

    render() {
        return (
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div className={classes.Modal}
                style={{
                    opacity: this.props.show ? 1 : 0,
                    transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)'
                }}>
                {this.props.children}
            </div>
        </Aux>
        );
    }
}

export default Modal;