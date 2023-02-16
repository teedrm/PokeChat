import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatbox from "./ChatBox";
import FriendList from "./FriendList";
import Navbar from "./Nav";
import Settings from "./Settings";
import Volume from "./Volume";
import Music from "./Musicplayer/App";
import GengarPlay from "./GengarPlay";
import GameMenu from "./GameMenu";
import Loader from "./Loader";

export default function ChatRoom(props) {
  let room_url = "";
  let navigate = useNavigate();
  const [state, setState] = useState({
    friends: false,
    settings: false,
    music: false,
    game: false,
    loaded: false
  });


  function onLoad() {
    setState({...state, loaded: true})
  }

  switch(props.room) {
    case "center":
      room_url = "https://prod.spline.design/kIeBNERFD3J58-JX/scene.splinecode";
      break;
    case "beach":
      room_url = "https://prod.spline.design/O4u6Cm1aROtbzPgm/scene.splinecode";
      break;
    case "forest":
      room_url = "https://prod.spline.design/pBzrH-Glx8h7D-Vu/scene.splinecode";
      break;
    default:
      room_url = "https://prod.spline.design/kIeBNERFD3J58-JX/scene.splinecode";
      break;
  };

  return (
    <div>
       {!state.loaded && <div className="loading"><div className="words">Loading...</div><Loader /></div>}
    <div>
      {state.loaded && <Navbar
        onHome = { () => {
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
      />}
      <GengarContainer>
        {state.loaded &&<GengarPlay
          onGame={() => {
            setState({...state, game: !state.game})
          }}
        />}
      </GengarContainer>
      <ChatRoomStyle>
        <Spline scene={room_url} onLoad={onLoad}/>
      </ChatRoomStyle>
      {state.loaded && <ChatboxStyle>
        <Chatbox room={props.room} friends={state.friends} user={props.user}/>
      </ChatboxStyle>}
      {/* {state.friends && <FriendList />} */}
      {state.settings && <Settings />}
      {state.music && <Music className="music-player"/>}
      {state.game && <GameMenu  
        onGame={() => {
          setState({...state, game: !state.game})
        }} />}
    </div>
    </div>
  );
}


 

const ChatboxStyle = styled.div`
  width: 28%;
  max-height: 30vh;
  margin-left: 10px;
  position: absolute;
  opacity: 0.85;
  z-index: 1;
  bottom: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.7px);
    -webkit-backdrop-filter: blur(7.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const ChatRoomStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

const GengarContainer = styled.div`
position: absolute;
z-index: 1;
height: 210px;
width: 200px;
margin-left: 100px;
margin-top: 420px;
align-item: center;
padding-top:10px;
`;