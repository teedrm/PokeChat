import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Signup/main";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./user/lobby";
import CreateLobby from "./user/createLobby";

export default function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
        </Routes>
      </Router>

    </div>
  );
}

