import React, { useState } from "react";
import styled from "styled-components";
import BotCard from "./BotCard";
import PlayerCard from "./PlayerCard";
import { randomCards } from "./common/CardDeck";
import table from "../assets/table.jpg";
import "../scss/cards.scss";

const botStartCards = randomCards.splice(-2, 1);
const startCards = randomCards.splice(-2, 2);

const App = () => {
  const [cards, setCards] = useState(startCards);
  const addCard = () => {
    const newCard = randomCards.pop();
    setCards([...cards, newCard]);
  };
  return (
    <Container>
      <GameContainer>
        <BotCard botStartCards={botStartCards} />
        <PlayerCard cards={cards} />
      </GameContainer>
      <ToolsContainer>
        <ToolsWrapper>
          <ScoreContainer>
            <ScoreWrapper>Bot - ?</ScoreWrapper>
            <ScoreWrapper>Player - ?</ScoreWrapper>
          </ScoreContainer>
          <button disabled={cards.length >= 51} onClick={() => addCard()}>
            Add Card
          </button>
          <ChipsContainer>Chips</ChipsContainer>
        </ToolsWrapper>
      </ToolsContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${table});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ToolsContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: rgba(128, 0, 0, 0.5);
  border-top: 5px solid crimson;
  button {
    height: 50px;
    background-color: goldenrod;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0 15px;
    outline: 0;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const ScoreContainer = styled.div``;

const ScoreWrapper = styled.div`
  color: lightseagreen;
`;

const ChipsContainer = styled.div`
  color: lightseagreen;
`;
