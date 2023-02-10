import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { React, useState } from "react";
import Chatbox from "./ChatBox";
import FriendList from "./FriendList";
import Navbar from "./Nav";
import Settings from "./Settings";
import Volume from "./Volume";

export default function ChatRoom(props) {
  // const [friends, setFriends] = useState(true);
  const [state, setState] = useState({
    friends: false,
    settings: false,
    volume: false
  });

  return (
    <div>
      <Navbar
        onFriends={() => {
          setState({ ...state, friends: !state.friends });
        }}
        onSettings={() => {
          setState({ ...state, settings: !state.settings });
        }}
        onVolume={() => {
          setState({ ...state, volume: !state.volume });
        }}
      />
      <ChatRoomStyle>
        <Spline scene="https://prod.spline.design/kIeBNERFD3J58-JX/scene.splinecode" />
      </ChatRoomStyle>
      <ChatboxStyle>
        <Chatbox />
      </ChatboxStyle>
      {state.friends && <FriendList />}
      {state.settings && <Settings />}
      {state.volume && <Volume />}
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
