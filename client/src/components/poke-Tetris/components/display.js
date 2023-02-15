import React from "react";
import { StyledDisplay } from "./styles/styledDisplay";

export default function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}
