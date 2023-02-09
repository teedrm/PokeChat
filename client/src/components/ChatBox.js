import { useEffect, useState, useContext } from "react";
import { authContext } from '../providers/AuthProvider';
import io from 'socket.io-client';
import styled from "styled-components";

export default function Chatbox(props) {

  const [messages, setMessages] = useState([]);
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

    socket.on("public", (data) => {
      const message = `${data.from} says:  ${data.text}`;
      if(data.text) {
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
    <div>
      <ChatboxStyle>
        <ul>{listOfMessages}</ul>
      </ChatboxStyle>
      <MessageInput>
        <div className="message-box">
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
      </MessageInput>
    </div>
  );
}

const TextStyle = styled.div`
  liststyle: "none";
  width: 100%;
  word-break: break-all;
`;

const ChatboxStyle = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: auto;
  max-height: 28vh;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const MessageInput = styled.div`
  background: rgba(255, 255, 255, 0.87);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 1);

  width: 100%;
  position: absolute;
  opacity: 0.85;
  bottom: 0;
  margin-top: 50px;
  display: flex;
  /* overflow: hidden; */
`;
