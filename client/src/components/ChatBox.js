import { useEffect, useState, useContext } from "react";
import { authContext } from '../providers/AuthProvider';
import io from 'socket.io-client';
import styled from "styled-components";
import FriendList from "./FriendList";
import './chatbox.css';

export default function Chatbox(props) {
  const room = props.room;

  const [messages, setMessages] = useState(["1dddddddddddddddddddddddd23","123","123","123","123","123","123","asd","123","123","ahsd","123"]);
  const [socket, setSocket] = useState();
  const [text, setText] = useState("");
  const [to, setTo] = useState("");

  const send = function () {
    socket.emit("message", { text, to });
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      send();
    }
  };


  useEffect(() => {
    //connecting to socket
    const socket = io();
    setSocket(socket);

    socket.on('connect', () => {
      console.log("connected");
    });

    socket.emit("join_room", room);

    socket.on("public", (data) => {
      const message = `${data.from} says:  ${data.text}`;
      if (data.text) {
        setMessages(prev => [...prev, message]);
        setText("");
      }
    });



    //prevents memory leak
    return () => socket.disconnect();

  }, []);

  const chatboxstyle = { listStyle: "none" };
  const messagesCopy = messages;
  console.log(messages);
  const listOfMessages = messagesCopy.map((msg, i) => {
    return (
      <li style={chatboxstyle} key={i}>
        <TextStyle>{msg}</TextStyle>
      </li>
    );
  });
  return (
    <container id="chat-friend">
      <div class="chat-box">
        <div id="render-message"><ul>{listOfMessages}</ul></div>
        <div class="message-box">
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write message..."
            className="new-message-input"
            onKeyUp={handleKeyUp}
          />
          <button
            onClick={send} className="send-message-button">
            Send
          </button>
          <button onClick={() => setMessages([])}>Clear</button>
        </div>
      </div>
      {props.friends && <FriendList className="friendlist" />}
    </container>

  );
}

const TextStyle = styled.div`
  liststyle: "none";
  width: 100%;
  word-break: break-all;
`;