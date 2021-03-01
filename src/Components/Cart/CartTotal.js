import React from 'react';
import'./Cart.css';

const CartTotal = (props) => {
    const cartTotal = props.cartTotal;
    const total = cartTotal.reduce( (total, productInform) => total + productInform.salary, 0)
    console.log(total);
    
    return (
        <div className="total-box" >
            <h1> Total Budget: ${total} </h1>
            <h4> Total Player: {cartTotal.length} </h4>
        </div>
    );
};

export default CartTotal;