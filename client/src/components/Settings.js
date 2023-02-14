import React from "react";
import "./settings.css";

export default function Settings() {
  return (
    <container className="settings-container">
      <div>
        <div class="logout-message">Are you sure you want to log out?</div>
        <button type="button" class="logout-button">
          Logout
        </button>
      </div>
    </container>
  );
}
