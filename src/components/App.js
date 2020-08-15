import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BotCard from "./BotCard";
import PlayerCard from "./PlayerCard";
import { cardDeck, compareRandom } from "./common/CardDeck";
import { Button } from "./common/Buttons";
import table from "../assets/table.jpg";
import { getScore } from "../utils/getScore";
import "../scss/cards.scss";

const App = () => {
  const [randomCards, setRandomCards] = useState([]);
  const [botCards, setBotCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [bankroll, setBankroll] = useState(100);
  const [isStarting, setIsStarting] = useState(false);
  const [isPlayerStand, setIsPlayerStand] = useState(false);
  const playerScore = getScore(cards);
  const [botScore, setBotScore] = useState(0);

  useEffect(() => {
    if (isPlayerStand && botScore <= 15) {
      const newCard = randomCards.pop();
      setBotCards((oldCards) => [...oldCards, newCard]);
    }
  }, [randomCards, botScore, isPlayerStand]);

  useEffect(() => {
    setBotScore(getScore(botCards));
  }, [botCards]);

  const startGame = () => {
    setIsStarting(true);
    const tempArray = cardDeck.slice();
    setRandomCards(tempArray.sort(compareRandom));
    setBotCards(randomCards.splice(-2, 1));
    setCards(randomCards.splice(-2, 2));
  };

  const addCard = () => {
    const newCard = randomCards.pop();
    setCards((oldCards) => [...oldCards, newCard]);
  };

  const stand = () => {
    setIsPlayerStand(true);
  };

  const deal = () => {
    if (playerScore <= 21 && playerScore > botScore) {
      setBankroll(bankroll + 10);
    } else if (playerScore === botScore) {
      setBankroll(bankroll);
    } else if (playerScore < botScore && botScore <= 21) {
      setBankroll(bankroll - 10);
    } else {
      setBankroll(bankroll - 10);
    }
    setRandomCards([]);
    setIsStarting(false);
    setBotCards([]);
    setCards([]);
    setIsPlayerStand(false);
  };

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
          <Button modifiers={["start"]} onClick={startGame}>
            Start Game
          </Button>
        </StartGameButtonContainer>
      )}

      <ToolsContainer>
        <ToolsWrapper>
          {isStarting && (
            <>
              <ScoreContainer>${bankroll}</ScoreContainer>
              <ButtonsContainer>
                <Button
                  modifiers={["hit"]}
                  disabled={playerScore >= 21 || isPlayerStand}
                  onClick={addCard}
                >
                  Hit
                </Button>
                <Button modifiers={["stand"]} onClick={stand}>
                  Stand
                </Button>
                <Button modifiers={["deal"]} onClick={deal}>
                  Deal
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
