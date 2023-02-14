import React from "react";
import "./settings.css";
import axios from 'axios';

export default function Settings() {
  const logout = function() {
    axios.post("api/logout", {})
      .then(() => {
        console.log("sucessfully log out")
      });
  };
  return (
    <container className="settings-container">
      <div>
        <div class="logout-message">Are you sure you want to log out?</div>
        <button type="button" class="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </container>
  );
}
