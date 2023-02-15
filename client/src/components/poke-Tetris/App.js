// import React from "react";
// import Tetris from "./components/Tetris";
// import Spline from "@splinetool/react-spline";
// import styled from "styled-components";
// import TetrisSpline from "./components/splineTetris";

// export default function App() {
//   return (
//     <div className="App">
//       <TetrisSpline />
//     </div>
//   );
// }

// // const Wrapper = styled.div`
// //   position: relative;
// // `;

// // const GameboyStyle = styled.div`
// //   position: absolute;
// //   top: 50px;
// //   left: 50px;
// //   z-index: 1; /* make sure the Tetris component is on top */
// // `;

import React, { useEffect, useState } from "react";
import Tetris from "./components/Tetris";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const GameboyStyle = styled.div`
  width: 28%;
  max-height: 15vh;
  margin-left: 300px;
  position: absolute;
  z-index: 1;
  bottom: 76%;
  right: 45vw;
  // left: 20%;
  // &:hover {
  //   background: rgba(255, 255, 255, 0.6);
  //   // border-radius: 16px;
  //   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  //   backdrop-filter: blur(7.7px);
  //   -webkit-backdrop-filter: blur(7.7px);
  //   border: 1px solid rgba(255, 255, 255, 0.3);
  // }
`;

const SplineWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

export default function App() {
  const [showTetris, setShowTetris] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTetris(true);
    }, 15000);
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
