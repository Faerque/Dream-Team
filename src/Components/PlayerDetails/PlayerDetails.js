import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
import './PlayerDetails.css'

const PlayerDetails = (props) => {
    // console.log(props);

    const {image, name, salary} = props.player;
    return (
        <div className="player">
            <div>
                <img src={image} alt="PlayerImage"/>
            </div>
            
            <div>
               <h3 className="players-name" > {name} </h3>
               <h5 className="salary" > Salary ${salary} </h5>
               <button 
                type="button" class="btn btn-primary add-button"
                    onClick={() => props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faHandPointUp} /> Add to your Dream Team</button>
            </div>
            
        </div>
    );
};

export default PlayerDetails;