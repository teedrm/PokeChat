import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 100px #fff;
  padding: 20px;
  border: 4px solid black;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#032030")};
  background: #fff;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  transform: scale(0.8);
`;
