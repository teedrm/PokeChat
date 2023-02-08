import React from "react";
import styled from "styled-components";
// import * as TextStyles from "../TextStyles";

import SigninButton from "./SigninButton";

function Header() {
  return (
    <Wrapper>
      <a href="https://locaclhost:3000/login" target="_blank" rel="noreferrer">
        <SigninButton title="Sign in" />
      </a>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 60px;
  top: 56px;
  right: 50px;
  z-index: 2;

  a {
    color: #000000;
    text-decoration: none;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;
