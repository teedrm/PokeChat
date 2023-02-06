import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import PlayButton from "/src/components/PlayButton"

export default function App() {
  return (
    <Wrapper className="App">
      <PlayButton />
      <Spline scene="https://prod.spline.design/cwaI5825d30JGN9H/scene.splinecode" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
`;
