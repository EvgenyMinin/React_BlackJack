import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BotCard from "./BotCard";
import PlayerCard from "./PlayerCard";
import { randomCards } from "./common/CardDeck";
import { Button } from "./common/Buttons";
import table from "../assets/table.jpg";
import { getScore } from "../utils/getScore";
import "../scss/cards.scss";

const botStartCards = randomCards.splice(-2, 1);
const startCards = randomCards.splice(-2, 2);

const App = () => {
  const [isStarting, setIsStarting] = useState(false);
  const [isPlayerStand, setIsPlayerStand] = useState(false);
  const [botCards, setBotCards] = useState(botStartCards);
  const [cards, setCards] = useState(startCards);
  const playerScore = getScore(cards);
  const [botScore, setBotScore] = useState(0);

  const addCard = () => {
    const newCard = randomCards.pop();
    setCards((oldCards) => [...oldCards, newCard]);
  };

  const stand = () => {
    setIsPlayerStand(true);
  };

  useEffect(() => {
    if (isPlayerStand && botScore <= 15) {
      const newCard = randomCards.pop();
      setBotCards((oldArray) => [...oldArray, newCard]);
    }
  }, [botScore, isPlayerStand]);

  useEffect(() => {
    setBotScore(getScore(botCards));
  }, [botCards]);

  return (
    <Container>
      {isStarting ? (
        <GameContainer>
          <BotCard
            botCards={botCards}
            botScore={botScore}
            isPlayerStand={isPlayerStand}
          />
          <PlayerCard cards={cards} playerScore={playerScore} />
        </GameContainer>
      ) : (
        <StartGameButtonContainer>
          <Button modifiers={["start"]} onClick={() => setIsStarting(true)}>
            Start Game
          </Button>
        </StartGameButtonContainer>
      )}

      <ToolsContainer>
        <ToolsWrapper>
          {isStarting && (
            <>
              <ScoreContainer>BankRoll</ScoreContainer>
              <ButtonsContainer>
                <Button
                  modifiers={["hit"]}
                  disabled={playerScore >= 21 || isPlayerStand}
                  onClick={addCard}
                >
                  Hit
                </Button>
                <Button
                  modifiers={["stand"]}
                  onClick={stand}
                  disabled={botScore >= 21}
                >
                  Stand
                </Button>
              </ButtonsContainer>
              <ChipsContainer>Chips</ChipsContainer>
            </>
          )}
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
`;

const ToolsWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const ScoreContainer = styled.div`
  color: lightseagreen;
`;

const ChipsContainer = styled.div`
  color: lightseagreen;
`;

const StartGameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  ${Button} {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;
