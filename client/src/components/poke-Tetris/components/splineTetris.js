import React from "react";
import Spline from "@splinetool/react-spline";
import Tetris from "./Tetris";
import styled from "styled-components";


const TetrisSpline = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Spline
        scene="https://prod.spline.design/W6F0YSGlSWSFGCVF/scene.splinecode"
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        widthratio={16}
        heightratio={9}
        />
      <StyledTetris />
    </div>
  );
};

const StyledTetris = styled(Tetris)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;
export default TetrisSpline;
