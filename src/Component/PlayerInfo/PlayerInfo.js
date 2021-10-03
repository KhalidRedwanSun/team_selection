import React from 'react';
import './PlayerInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const PlayerInfo = (props) => {
    let {name,image,salary}=props.player;
    return (
        <div className="IndividualInfo">
            <br />
            <h3>Player Name: {name}</h3>
            <br />
            <img src={image} alt="" />
            <br /> <br />
            <h3>Salary: <nobr style={{color: 'white'}}>$ {salary}</nobr></h3>
            <br />
            <button className="btn btn-outline-warning  btn-lg" onClick={()=>props.handleAddPlayer(props.player)}><h3><FontAwesomeIcon icon={faUserPlus} className='icon' />Add me </h3></button>
            <br />
            <br />
            

             
{/* 
                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <img src={image} alt="" />
                        <h3 class="card-title">{name}</h3>
                        <p class="card-text">Salary: {salary}</p>
                        <button onClick={()=>props.handleAddPlayer(props.player)}><h3><FontAwesomeIcon icon={faUserPlus} className='icon' />Add me </h3></button>

                    </div>
                </div> */}




        </div>
    );
};

export default PlayerInfo;