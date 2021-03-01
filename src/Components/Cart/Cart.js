import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
  
    console.log(cart);
   
 

    return (
        <div className="player-box" >
          <h5>Player Added!</h5>
          <img src={cart.image} alt=""/>
          <h2>Name: {cart.name}</h2>
          <h4> Players Salary: ${cart.salary} </h4>  
        </div>
    );
};

export default Cart;
