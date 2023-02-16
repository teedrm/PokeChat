import styled from "styled-components";
import bgImage from "../../img/pokeball2.jpeg";

export const StyledTetrisWrapper = styled.div`
  width: 60vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.8);
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 80%;
    max-width: 200px;
    display: block;
    padding: 0px;
  }
`;
