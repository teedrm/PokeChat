import "./styles.css";
import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import * as TextStyles from "./TextStyles";

import Logo from "./components/Logo";
import CreateButton from "./components/CreateButton";
import SplineScene from "./components/SplineScene";
import Header from "./components/Header";

export default function App() {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContentWrapper>
        <Container>
          <TextContainer>
            <Title>Create an account</Title>
            <Description>Create an account</Description>
          </TextContainer>
          <ButtonContainer>
            <CreateButton />
          </ButtonContainer>
        </Container>
        <SplineContainer>
          <Header />
          <SplineScene />
        </SplineContainer>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  width: 50px;
  height: 50px;
`;
const TextContainer = styled.div`
  display: grid;
  gap: 24px;
  padding: 225px 8px 8px 56px;
`;

const Title = styled(TextStyles.H1)``;

const Description = styled.p`
  max-width: 360px;
  text-align: left;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: gba(0, 0, 0, 0.6);
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1000px 855px;
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  position: relative;
`;

const SplineContainer = styled.div`
  position: relative;
  padding: 50px 20px 24px 0px;

  .spline {
    border-radius: 20px;
  }
`;
