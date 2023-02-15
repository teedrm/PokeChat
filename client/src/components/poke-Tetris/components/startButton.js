import React from "react";
import { StyledStartButton } from "./styles/styledStartButton";

export default function StartButton({ callback }) {
  return (
    <StyledStartButton onClick={callback} className="button-poke">
      Start Game
    </StyledStartButton>
  );
}
