import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import PlayButton from "./PlayButton"

export default function App() {
  return (
    <Wrapper className="App">
      {/* <PlayButton /> */}
      {/* <Spline scene="https://prod.spline.design/CM9gPAJZ0-8GQZ-s/scene.splinecode" /> */}
      <Spline scene="https://prod.spline.design/cwaI5825d30JGN9H/scene.splinecode" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
`;
