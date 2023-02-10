import Spline from "@splinetool/react-spline";
import PlayButton from "./PlayButton";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="App">
      <ButtonContainer className="play-button">
        <PlayButton />
      </ButtonContainer>
      <Instruction>
        <Spline scene="https://prod.spline.design/kimyBtkdtDt0rtFi/scene.splinecode" />
      </Instruction>
      <SceneContainer className="spline-scene">
        <Spline scene="https://prod.spline.design/cwaI5825d30JGN9H/scene.splinecode" />
      </SceneContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SceneContainer = styled.div`
  position: relative;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: 300px;
  width: 600px;
  margin-left: 25%;
  margin-top: 5%;
  align-item: center;
`;

const Instruction = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 25%;
  height: 50%;
  width: 50%;
  margin-top: 25%;
`;
export default Home;
