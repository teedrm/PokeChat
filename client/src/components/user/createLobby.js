import React from "react";

export default function CreateLobby() {


  return (
    // for later, if no input for room name, show error
    // for later, may add max number of people set for a room
    <form>
      <div>
        <label for="roomName">Room Name:</label>
        <input type="text" id="roomName" name="roomName" required />
      </div>
      {/* password could be removed depending on the functionality */}
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Create Room</button>
    </form>
  );
}
