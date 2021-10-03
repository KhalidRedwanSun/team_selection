import React, { useState } from 'react';
import './Selected.css'

const Selected = (props) => {
    console.log('OI',props.players);
    console.log('props.plyrlist',props.playerList);
   

    let totalPlayer=props.playerList.length;
    let allTotalSalary=props.totalSalary;



    return (
        <div>
            <h1 style={{color: 'goldenrod'}}>Selection Area</h1>
            <br />
            <br />

            <h3>Total Selected Player: {totalPlayer} </h3>
            <h3>All Total Budget: $ {allTotalSalary}</h3>
            <br />
            <h3>Added Players Name:</h3>
            
            <ul>
                {
                    props.players.map(player =><li style={{color: 'white'}} className='selected-player'>{player.name}: ${player.salary}</li> 
                        )

                }

           

            </ul>
            
        </div>
    );
};

export default Selected;
