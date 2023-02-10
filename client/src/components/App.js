import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Signup/main";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./Lobby/lobby";
import CreateLobby from "./Lobby/createLobby";
import CreateUser from "./Lobby/createUser";

export default function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
          <Route path ="/selectAva" element={<CreateUser />} />
        </Routes>
      </Router>

    </div>
  );
}