import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./lobbyNavStyles.css"


export default function LobbyNav() {
  return (
    <nav className="lobbynav">
      <body className="nav-body">
        <header>
          <div className="lobbynav-element">
            <div className="logo">
              <a href="#">CHAT LOBBY</a>
            </div>
            <ul class="links">
              <li>
                <Link to="/" className="link"><FaHome size={18}/>Home</Link>
              </li>
              <li>
                <a href="#">menu2</a>
              </li>
              <li>
                <a href="#">menu3</a>

              </li>
            </ul>
          </div>
        </header>
      </body>
    </nav>
  );
}
