import Game from "./Game";
import Scene from "./Scene";
import styled from "styled-components";

export default function Pokegame() {
  return (
    <Wrapper>
      <GameContainer>
      <Game />
      </GameContainer>
      <SceneContainer>
      <Scene />
      </SceneContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
overflow: hidden;
margin: 0;
`;

const SceneContainer = styled.div`
position: relative;
background-size: cover;
width: 100vw;
height: 100vh;
`;

const GameContainer = styled.div`
position: absolute;
z-index: 1;
align-item: center;
margin-top: 3%;
`;