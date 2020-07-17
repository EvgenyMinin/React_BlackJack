import React, { useState } from "react";
import styled from "styled-components";
import BotCard from "./BotCard";
import PlayerCard from "./PlayerCard";
import { randomCards } from "./common/cardDeck";

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
      <h1>blackjack</h1>
      <BotCard botStartCards={botStartCards} />
      <PlayerCard cards={cards} />
      <button disabled={cards.length >= 51} onClick={() => addCard()}>
        Add Card
      </button>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
