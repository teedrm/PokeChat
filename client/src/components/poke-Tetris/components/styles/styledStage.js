import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  width: 100%;
  max-width: 25vw;
  background: black;
  border: 15px solid #555;
  background: black;
  border: 10px solid #eee;
  border-image: linear-gradient(to right, #ff105f, #ffad06);
  border-image-slice: 1;
`;
