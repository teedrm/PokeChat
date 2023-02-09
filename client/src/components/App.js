import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import PlayButton from "./PlayButton"
import ChatRoom from "./ChatRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Signup/main";
import Login from "./Login";
import Home from "./Home";
import LobbyPage from "./user/lobby";
import CreateLobby from "./user/createLobby";

export default function App() {


  return (
    <Wrapper className="App">
      <div>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
          <Route path ="/chatroom" element={<ChatRoom />} />
        </Routes>
      </Router>

    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SceneContainer = styled.div`
position:relative;
background-size: cover;
width: 100vw;
height: 100vh;
cursor: pointer;
`;

const ButtonContainer = styled.div`
position: absolute;
z-index: 1;
height: 300px;
width: 600px;
margin-left: 25%;
margin-top: 5%;
align-item: center;
`;

const Instruction = styled.div`
position: absolute;
z-index: 1;
margin-left: 25%;
height: 50%;
width: 50%;
margin-top:25%;
`;
    
