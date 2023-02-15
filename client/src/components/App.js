import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./Lobby/lobby";
import CreateLobby from "./Lobby/createLobby";
import ChatRoom from "./ChatRoom";
import Pokegame from "./Pokegame/App";


export default function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <Router>
        <Routes>
          
          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<Register/>} />
          <Route path ="/login" element={<Login user={user} setUser={setUser}/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
          <Route path ="/chatroom1" element={<ChatRoom room="center" user={user}/>} />
          <Route path ="/chatroom2" element={<ChatRoom room="beach" user={user}/>} />
          <Route path ="/chatroom3" element={<ChatRoom room="forest" user={user}/>} />
          <Route path ="/pokegame" element={<Pokegame />} />
        </Routes>
      </Router>

    </div>
  );

}

