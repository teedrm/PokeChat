import React from "react";
import { StyledCell } from "./styles/styledCell";
import { TETROMINOS } from "../tetrominos";
import b1 from "../img/bulbasaur-T.png";
import emptyC from "../img/empty-cell.png";
import p1 from "../img/pikachu-T.png";
import e1 from "../img/evee-T.png";
import c1 from "../img/charmander-T.png";
// import d1 from "../img/dugong-T.png";
import g1 from "../img/gengar-T.png";
import p2 from "../img/purin-T.png";
import s1 from "../img/squirtle-T.png";

// export default function Cell({ type }) {

//   return (
//     <StyledCell type={type} color={TETROMINOS[type].color} />
//   )
// };

// const Cell = ({ type }) => (
//   <StyledCell type={type} color={TETROMINOS[type].color} />
// );
// export default Cell;

const Cell = ({ type }) => (
  <StyledCell type={type}>
    {type === "I" && (
      <img src={b1} alt="I shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "J" && (
      <img src={p1} alt="J shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "L" && (
      <img src={e1} alt="L shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "O" && (
      <img src={c1} alt="O shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "S" && (
      <img src={g1} alt="S shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "T" && (
      <img src={p2} alt="T shape" style={{ width: "100%", height: "100%" }} />
    )}
    {type === "Z" && (
      <img src={s1} alt="Z shape" style={{ width: "100%", height: "100%" }} />
    )}
  </StyledCell>
);
//   <StyledCell type={type} color={TETROMINOS[type].color }></StyledCell>
// );

export default React.memo(Cell);
