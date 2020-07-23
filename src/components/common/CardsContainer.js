import styled from "styled-components";

export const CardsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 30vh;
`;

export const ScoreContainer = styled.div`
  position: absolute;
  left: -30px;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial";
  font-size: 24px;
  color: white;
  background-color: crimson;
  box-shadow: 0 3px 3px crimson;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  text-align: center;
`;
