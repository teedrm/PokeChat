import React from "react";
import "./gamemenu.css";

export default function GameMenu(props) {
 
  return (
    <container className="game-container">
      <div>
        <div className="game-menu">Game Menu</div>
        <ul className="games-list">
            <li className="games" onClick={()=>{
              window.open("/game.html");
              props.onGame();
              }}>
                <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokemonjump.png?raw=true"/>
                <p>PokeJump</p>
            </li>
            <li className="games" onClick={()=> {
              window.open("/pokegame");
              props.onGame();
            } }>
                <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokecrush.png?raw=true" />
                <p>PokeCrush</p>
            </li>
            <li className="games" onClick={()=> {
              window.open("/tetris");
              props.onGame();
              }}>
            <img className="games-images" src="https://github.com/teedrm/final/blob/master/client/public/img/tetris.png?raw=true" />
                <p>PokeTetris</p>
            </li>
            <li className="games" onClick={()=> {
              window.open("/memoryGame");
              props.onGame();
              }}>
            <img className="games-images" src="https://github.com/teedrm/final/blob/master/client/public/img/memory.png?raw=true" />
                <p>PokeMemory</p>
            </li>
          </ul>
      </div>
    </container>
  );
}
