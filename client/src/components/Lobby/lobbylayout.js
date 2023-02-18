import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./lobby.css"
import Navbar from "../Nav";
import Chatbox from "../ChatBox";

export default function Lobby(props) {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Pokemon Center"},
    { id: 2, name: "Sunshine Beach"},
    { id: 3, name: "Dark Forest"}
  ]);
  //testing code for navbar
  const [state, setState] = useState({
    friends: false,
    settings: false,
    music: false,
    game: false,
    loaded: false,
    camera: false
  });


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
      <Navbar
          onHome={() => {
            navigate("/lobby");
          }}
          onFriends={() => {
            setState({ ...state, friends: !state.friends });
          }}
          onSettings={() => {
            setState({ ...state, settings: !state.settings });
          }}
          onMusic={() => {
            setState({ ...state, music: !state.music });
          }}
          onCamera={() => {
            setState({ ...state, camera: !state.camera });
          }}
        />
      
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
              <input placeholder="Type in room name" className="create-input" type="text" value={newRoom} onChange={(event) => setNewRoom(event.target.value)} />
              <button className="create-button" type="submit" >Create Room</button>
          </form>
        </div>
      </div>
      <ChatboxStyle>
      <Chatbox room="lobby" friends={state.friends} user={JSON.parse(localStorage.getItem('token'))} />
      </ChatboxStyle>

    </LobbyStyle>
  )};


  const ChatboxStyle = styled.div`
  width: 28%;
  max-height: 30vh;
  margin-left: 10px;
  position: absolute;
  opacity: 0.85;
  z-index: 1;
  bottom: -220%;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.7px);
    -webkit-backdrop-filter: blur(7.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }


`;
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
