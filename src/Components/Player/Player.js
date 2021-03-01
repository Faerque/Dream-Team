import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import CartTotal from '../Cart/CartTotal';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Player.css'

const Player = () => {
    // console.log(fakeData);
    // const first10 = fakeData.slice(0, 10);
    // const [players, setPlayers] = useState(first10)
    const [cart, setCart] = useState([]);

    const [players, setPlayers] = useState([])
    useEffect(() =>{
        const data = fakeData;
        setPlayers(data);
        
    },[])
    

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
        // console.log(newCart);
    }
   
    return (
        <div className="player-container" >
            
            <div className="player-details"> 
            
            
             {players.map(player => <PlayerDetails  handleAddPlayer = {handleAddPlayer} player={player}> </PlayerDetails>)}

        
            </div>

            <div className="cart-container"> 
                <CartTotal cartTotal={cart}> </CartTotal>
                {cart.map(cartIn => <Cart cart={cartIn} > </Cart>)}
            </div>

           
        </div>
    );
};

export default Player;

