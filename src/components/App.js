import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <h1>blackjack</h1>
      <Card />
    </Container>
  );
};

export default App;
