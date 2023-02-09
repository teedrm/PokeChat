import React from "react";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-elements">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
}
