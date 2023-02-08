import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/TTEvMkutHHzjqOBT/scene.splinecode"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  min-height: 900px;

  @media (max-width: 560px) {
    min-height: 720px;
  }
`;
