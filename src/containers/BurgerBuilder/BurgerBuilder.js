import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientPrice = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.9,
    meat: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasble: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            },0);
        this.setState({purchasble: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = ingredientPrice[type];
        console.log("price added:",priceAddition);
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        console.log("totalPrice after adding ingredient:", updatedPrice);
        console.log("updated:",updatedIngredients);
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        console.log("ingredients:",this.state.ingredients);
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = ingredientPrice[type];
        console.log("price added:",priceDeduction);
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;
        console.log("totalPrice after adding ingredient:", updatedPrice);
        console.log("updated:",updatedIngredients);
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        console.log("ingredients:",this.state.ingredients); 
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelled= () => {
        this.setState({purchasing: false})
    }

    purchaseContinue = () => {
        alert("Continue");
    }
     
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelled}>
                    <OrderSummary 
                        price={Number(this.state.totalPrice.toFixed(2))}
                        purchaseContinue={this.purchaseContinue}
                        purchaseCancelled={this.purchaseCancelled}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    purchasble={this.state.purchasble} 
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;