import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./Lobby/lobby";
import CreateLobby from "./Lobby/createLobby";
import CreateUser from "./Lobby/createUser";
import ChatRoom from "./ChatRoom";
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
          <Route path ="/Chatroom" element={<ChatRoom />} />
        </Routes>
      </Router>

    </div> 
  );
}




