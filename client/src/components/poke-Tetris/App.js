import React, { useEffect, useState } from "react";
import Tetris from "./components/Tetris";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";


export default function PokeTetris() {
  const [showTetris, setShowTetris] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTetris(true);
    }, 17000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <SplineWrapper>
          <Spline scene="https://prod.spline.design/W6F0YSGlSWSFGCVF/scene.splinecode" />
        </SplineWrapper>
        <GameboyStyle>{showTetris && <Tetris />}</GameboyStyle>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  position: relative;
`;
const GameboyStyle = styled.div`
  width: 22%;
  max-height: 15vh;
  // margin-left: 400px;
  position: absolute;
  z-index: 1;
  bottom: 86%;
  right: 45vw;
  font-family: 'Pixel', sans-serif;
`;

const SplineWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;
