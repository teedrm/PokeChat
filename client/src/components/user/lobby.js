import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function LobbyPage() {
  // <div class="game-lobby-room">
  // <div class="header">
  //   <h1>Game Lobby Room</h1>
  // </div>
  // <div class="room-list">
  //   <h2>Available Rooms:</h2>
  //   <ul>
  //     <li><a href="#">Room 1</a></li>
  //     <li><a href="#">Room 2</a></li>
  //     <li><a href="#">Room 3</a></li>
  //   </ul>
  // </div>
  // <div class="player-list">
  //   <h2>Players in Room:</h2>
  //   <ul>
  //     <li>Player 1</li>
  //     <li>Player 2</li>
  //     <li>Player 3</li>
  //   </ul>
  // </div>
  // </div>

  const [rooms, setRooms] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // fetch list of rooms from the API
    fetch("/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));

    // fetch list of players in the current room
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="game-lobby-room">
      <div className="header">
        <h1>Game Lobby Room</h1>
      </div>
      <div className="room-list">
        <h2>Available Rooms:</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <a href="#">{room.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="player-list">
        <h2>Players in Room:</h2>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
        <div className="create-lobby">
          <h2> (+) Create Lobby</h2> {/* link to create lobby component later */}
        </div>
      </div>
    </div>
  );
}
