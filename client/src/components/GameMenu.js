import React from "react";
import "./gamemenu.css";

export default function Settings() {
 
  return (
    <container className="settings-container">
      <div>
        <div className="game-menu">Game Menu</div>
        <ul className="games-list">
            <li className="games" onClick={()=> window.open("/game.html")}>
                <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokemonjump.png?raw=true"/>
                <p>PokeJump</p>
            </li>
            <li className="games" onClick={()=> window.open("/pokegame")}>
                <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokecrush.png?raw=true" />
                <p>PokeCrush</p>
            </li>
            <li className="games" onClick={()=> window.open("/tetris")}>
            <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokecrush.png?raw=true" />
                <p>PokeCrush</p>
            </li>
            <li className="games" onClick={()=> window.open("/memoryGame")}>
            <img className="games-images" src="https://github.com/teedrm/final/blob/games-path/client/public/games-images/pokecrush.png?raw=true" />
                <p>PokeCrush</p>
            </li>
          </ul>
      </div>
    </container>
  );
}
