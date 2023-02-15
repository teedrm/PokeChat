import React, { useState } from "react";
//styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/styledTetris";
import styled from "styled-components";
import PlaySound from "./bgm";
import Spline from "@splinetool/react-spline";


//components
import Stage from "./stage";
import Display from "./display";
import StartButton from "./startButton";

//custome Hooks
import { createStage, checkCollision } from "../_gameHelpers";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const movePlayerDown = () => {
    setDropTime(null);
    drop();
  };

  // const spacePlayer = (dir) => {
  //   while (!checkCollision(player, stage, { x: 0, y: 1 })) {
  //     updatePlayerPos({ x: 0, y: 1, collided: false });
  //   }
  // }

  const startGame = () => {
    console.log("test");

    //reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    console.log(dropTime);
    // increase level when player cleared 5 rows
    if (rows > (level + 1) * 1) {
      setLevel((prev) => prev + 1);
      // increase the speed
      setDropTime(1000 / (level + 1) + 200);
    }

    //check collision on y axis
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // when Game Over
      if (player.pos.y < 1) {
        console.log("Game Over!!");
        setDropTime(null);
        setGameOver(true);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40 || keyCode === 83) {
        // down key
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  // tetromino movement left, right, dropdown
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37 || keyCode === 65) {
        //left key, a
        movePlayer(-1);
      } else if (keyCode === 39 || keyCode === 68) {
        //right key, d
        movePlayer(1);
      } else if (keyCode === 40 || keyCode === 83) {
        //down key, s
        movePlayerDown();
      } else if (keyCode === 38 || keyCode === 87) {
        //up key, w
        playerRotate(stage, 1);
      } else if (keyCode === 16) {
        //shift
        playerRotate(stage, -1);
        // } if (keyCode === 32) {
        //   spacePlayer(stage);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
    role="button"
    tabIndex="0"
    onKeyDown={(e) => move(e)}
    onKeyUp={keyUp}
    >
      <Title text="PokèMon" gameOver={gameOver}></Title>
      {/* <img src= {title} alt="poke-title" /> */}

      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Git Gud!" />
          ) : (
            <div>
              <PlaySound />
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: left;
  color: ${(props) => (props.gameOver ? "red" : "blue")};
  font-family: ;
`;

const GameboyStyle = styled.div`

`;
