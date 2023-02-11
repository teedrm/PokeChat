import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
// import { io } from "socket.io-client";
import LobbyNav from "./lobbyNav";
import axios from "axios";

// const socket = io();

export default function LobbyPage() {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Thy's room" },
    { id: 2, name: "Bianca's room" },
    { id: 3, name: "John's room" },
  ]);
  const [newRoom, setNewRoom] = useState("");

  // const [socket, setSocket] = useState(io());

  // const navigate = useNavigate();

  // const handleClick = (id) => {
  //   navigate("/chatroom");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // socket.emit("rooms", { room: newRoom });
    setRooms((prev) => [...prev, { id: prev.length + 1, name: newRoom }]);
    setNewRoom("");
  };

  // useEffect(() => {
  //   //connecting to socket
  //   // setSocket(socket);

  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });

  //   socket.on("addRoom", (data) => {
  //     // console.log("data", JSON.stringify(data, null, 2))
  //     console.log("rr", JSON.stringify(rooms, null, 2));
  //   });
  //   socket.on("addRoom", (room) => {
  //   	setRooms((prev) => [...prev, { id: prev.length + 1, name: room }])
  //   });

  //   //prevents memory leak
  //   return () => {
  //     socket.off("connect");
  //     socket.off("addRoom");
  //   };
  // }, []);

  //styling:
  //nav bar that shows status username title
  //stretch :show available, filled, all rooms(add functionality)

  return (
    <div>
      <LobbyNav />
      <LobbyStyle>
        <body>
        <div className="lobby-room">
          <div className="room-list">
            <h2>Available Rooms:</h2>
            <ul>
              {rooms.map((room) => (
                <li key={room.id}>
                  {/* <Link to onClick={() => handleClick(room.id)}> {room.name}</Link> */}
                  <Link to={`/chatroom/${room.id}`}>{room.name}</Link>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newRoom}
                onChange={(event) => setNewRoom(event.target.value)}
              />
              <button type="submit">Create Room</button>
            </form>
          </div>
        </div>
        </body>
      </LobbyStyle>
    </div>
  );
}

const LobbyStyle = styled.div`
  body {
    background-color: #E0E0E0;
    font-family: Arial, sans-serif;
    height: 100vh;
    background-color: #000;
    background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1608/Pokemon_go_2016-Classic_High_Quality_Wallpaper_1366x768.jpg');
    opacity: 0.3;
  }
  .lobby-room {
    width: 80%;
    margin: 0 auto;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px #BDBDBD;
    border-radius: 10px;
    padding: 20px;
  }


  .lobby-room h1 {
    text-align: center;
    font-size: 36px;
    margin-`;
