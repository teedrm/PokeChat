import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function SigninButton(props) {
  const { title } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default SigninButton;

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  background-color: black;

  :hover {
    transform: translateY(-2px);
  }
`;

const Title = styled(TextStyles.Caption)`
  color: white;
  padding: 12px 20px;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
