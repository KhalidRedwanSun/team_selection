import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playersData from './Data/Data.json'
import PlayerInfo from './Component/PlayerInfo/PlayerInfo';
import Selected from './Component/Selected/Selected';

function App() {

  const[players,setPlayers] =useState([]);

  useEffect (()=>{
    let AllPlayersData=playersData;
    setPlayers(AllPlayersData);
  },[]);



  const[playerData,setPlayerData]= useState([]);
  const [playerList,setPlayerList]= useState([]);
  const[totalSalary,setTotalSalary]=useState(0);

   

  const handleAddPlayer = (player) => {
      console.log("Player Added", player);

      let playerInfos=[...playerData,player];
      setPlayerData(playerInfos);
      



      

      // eta   newCart =[...cart,product]; ...cart mane cart er ager element + product. meaning newCart=[cart]+[product] (in python);

      const newPlayerList =[...playerList,player.name];
      setPlayerList(newPlayerList);

      let newTotalSalary=totalSalary+player.salary;
      setTotalSalary(newTotalSalary)

  }

  


 
  





  
  
  
  return (
    <div className="App">

      <div className='full-container'>

        <div className="player-info">
          <h1>All Star FC Team Selection</h1>
          <br />
          
            {
              players.map(player => <PlayerInfo player={player} handleAddPlayer={handleAddPlayer}  ></PlayerInfo>)
            }
          

        </div>

        <div className="selected-info">
          <Selected players={playerData} totalSalary={totalSalary} playerList={playerList} ></Selected>

        </div>

      </div>
    </div>
  );
}

export default App;
