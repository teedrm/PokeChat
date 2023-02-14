import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./lobby.css"


export default function LobbyPage() {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Pokemon Center"},
    { id: 2, name: "Sunshine Beach"},
    { id: 3, name: "Dark Forest"}
  ]);
  const [newRoom, setNewRoom] = useState("");
  
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/chatroom${id}`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setRooms([...rooms, { id: rooms.length + 1, name: newRoom}]);
    setNewRoom("");
  };

  return(
    <LobbyStyle>
      <div className="lobby-room">
        <div className="header">
          {/* <h1>Chat Lobby Room</h1> */}
        </div>
        <div className="room-list">
          <h2 className="available">Available Rooms:</h2>
          <ul>
            {rooms.map((room) => (
              <li className="list-style"
              key={room.id} 
              onClick={() => handleClick(room.id)}>
                {console.log("room id", room.id, "room name", room.name)}
                {/* <Link to = {`chatroom${room.id}`}>{room.name}</Link> */}
                {room.name}
              </li>
            ))}
          </ul>
          <form className="create-room" onSubmit={handleSubmit}>
              <input className="create-input" type="text" value={newRoom} onChange={(event) => setNewRoom(event.target.value)} />
              <button className="create-button" type="submit" >Create Room</button>
          </form>
        </div>
      </div>

    </LobbyStyle>
  )};


  const LobbyStyle = styled.div`
  body {
    background-color: #E0E0E0;
    font-family: Arial, sans-serif;
  }

  // .lobby-room {
  //   width: 80%;
  //   margin: 0 auto;
  //   background-color: #FFFFFF;
  //   box-shadow: 0px 0px 10px #BDBDBD;
  //   border-radius: 10px;
  //   padding: 20px;
  // }

  // .lobby-room h1 {
  //   text-align: center;
  //   font-size: 36px;
  //   margin-`;
//   const [rooms, setRooms] = useState([]);
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     // fetch list of rooms from the API
//     fetch("/api/rooms") //address can change
//       .then((res) => res.json()) // if in json format
//       .then((data) => setRooms(data));

//     // fetch list of players in the current room
//     fetch("/api/players")
//       .then((res) => res.json())
//       .then((data) => setPlayers(data));
//   }, []);

//   return (
//     <div className="game-lobby-room">
//       <div className="header">
//         <h1>Game Lobby Room</h1>
//       </div>
//       <div className="room-list">
//         <h2>Available Rooms:</h2>
//         <ul>
//           {rooms.map((room) => (
//             <li key={room.id}>
//               <a href="#">{room.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="player-list">
//         <h2>Players in Room:</h2>
//         <ul>
//           {players.map((player) => (
//             <li key={player.id}>{player.name}</li>
//           ))}
//         </ul>
//         <div className="create-lobby">
//           <h2> (+) Create Lobby</h2> {/* link to create lobby component later */}
//         </div>
//       </div>
//     </div>
//   );
// }
