import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 100px #000;
  padding: 20px;
  border: 4px solid #555;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#032030")};
  background: #fff;

  font-family: 'Pixel', sans-serif;
  font-size: 0.8rem;
  transform: scale(0.8);
`;
