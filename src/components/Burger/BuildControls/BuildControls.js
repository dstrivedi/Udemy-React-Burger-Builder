import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                disabled={props.disabled[ctrl.type]} 
                key={ctrl.label} 
                label={ctrl.label} 
                removed={() => props.ingredientRemoved(ctrl.type)} 
                added={() => props.ingredientAdded(ctrl.type)}/>
        ))}
        <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasble}>ORDER NOW</button>
    </div>
);

export default buildControls;