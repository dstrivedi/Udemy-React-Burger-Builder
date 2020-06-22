import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import PropTypes from 'prop-types';

const burger = (props) => {
    // console.log(props.ingredients);
    // console.log(Object.keys(props.ingredients))
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //console.log(Array(props.ingredients[igKey]))
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log(igKey + i)
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start addding ingredients!!</p>
    };

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}

export default burger;

