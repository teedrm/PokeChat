import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import React, { Suspense } from 'react';

export default function App(props) {
  const {onLoad} = props
  return (
 
    <Wrapper>
      <Spline
        className="spline"
        onLoad={onLoad}
        scene="https://prod.spline.design/TTEvMkutHHzjqOBT/scene.splinecode"
      />
    </Wrapper>

  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  min-height: 1100px;
  min-width: 1200px;
  // background: rgba(255, 255, 255, 0.18);
  // border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5.2px);
  // -webkit-backdrop-filter: blur(5.2px);
  // border: 1px solid rgba(255, 255, 255, 0.5);

  @media (max-width: 560px) {
    min-height: 720px;
  }
`;
