import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./Lobby/lobby";
import CreateLobby from "./Lobby/createLobby";
import ChatRoom from "./ChatRoom";
import Game from "./Game";


export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          
          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<Register/>} />
        
          <Route path ="/login" element={<Login/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
          <Route path ="/chatroom1" element={<ChatRoom room="center" />} />
          <Route path ="/chatroom2" element={<ChatRoom room="beach" />} />
          <Route path ="/chatroom3" element={<ChatRoom room="forest" />} />
          <Route path = "/game" element={<Game />} />
        </Routes>
      </Router>

    </div>
  );

}

