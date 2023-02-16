import React, { useState } from "react";

import SplineScene from "./Forms/SplineScene-Greninjia";
import LoginForm from "./Forms/LoginForm";
import style from "styled-components";
import Loader from "./Loader";

// const SplineScene = React.lazy(() => import("./Forms/SplineScene-Greninjia"));

const Login = (props) => {
  const [loaded, setLoaded] = useState(false);
  function onLoad() {
    setLoaded(true);
  }
  return (
    <div>
      {!loaded && <div className="loading"><div className="words">Loading...</div><Loader /></div>}
      <Wrapper>
        {loaded && (
          <FormContainer>
            <LoginForm {...props} />
          </FormContainer>
        )}
        <SplineContainer>
          <SplineScene onLoad={onLoad} />
          {/* {!loaded && <h1>loading...</h1>} */}
        </SplineContainer>
      </Wrapper>
    </div>
  );
};

const Wrapper = style.div`
  display: grid;
  grid-template-columns:  50% 2fr 50%;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  `;

const FormContainer = style.div`
position: relative;
padding: 10px 10px 10px 10px;
background: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 60%;
  margin-top: 20%;`;

const SplineContainer = style.div`
  position: relative;
  padding: 10px 10px 10px 10px;

  .spline {
    border-radius: 20px;
    margin: 0;
    padding: 0;
  }
`;
export default Login;
