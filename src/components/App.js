import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BotCard from "./BotCard";
import PlayerCard from "./PlayerCard";
import BetSlider from "./BetSlider";
import PlayerInfo from "./PlayerInfo";

import { cardDeck, compareRandom } from "./common/CardDeck";
import { Button } from "./common/Buttons";

import table from "../assets/table.jpg";
import { getScore } from "../utils/getScore";
import "../scss/cards.scss";

const App = () => {
  const blackJackScore = JSON.parse(localStorage.getItem("blackjack"));
  const [randomCards, setRandomCards] = useState([]);
  const [botCards, setBotCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [bankroll, setBankroll] = useState(blackJackScore || 100);
  const [isStarting, setIsStarting] = useState(false);
  const [isPlayerStand, setIsPlayerStand] = useState(false);
  const playerScore = getScore(cards);
  const [botScore, setBotScore] = useState(0);
  const [bet, setBet] = useState(1);

  useEffect(() => {
    if (isPlayerStand && botScore <= 15) {
      const newCard = randomCards.pop();
      setBotCards((oldCards) => [...oldCards, newCard]);
    }
  }, [randomCards, botScore, isPlayerStand]);

  useEffect(() => {
    setBotScore(getScore(botCards));
  }, [botCards]);

  useEffect(() => {
    localStorage.setItem("blackjack", bankroll);
  }, [bankroll]);

  useEffect(() => {
    if (isStarting) {
      const tempArray = cardDeck.slice();
      setRandomCards(tempArray.sort(compareRandom));
      setBotCards(randomCards.splice(-2, 1));
      setCards(randomCards.splice(-2, 2));
    }
    // eslint-disable-next-line
  }, [isStarting]);

  const startGame = () => {
    setIsStarting(true);
  };

  const addCard = () => {
    const newCard = randomCards.pop();
    setCards((oldCards) => [...oldCards, newCard]);
  };

  const stand = () => {
    setIsPlayerStand(true);
  };

  const rebuy = () => {
    localStorage.setItem("blackjack", 100);
    setBankroll(100);
  };

  const deal = () => {
    if (playerScore <= 21 && playerScore > botScore) {
      setBankroll(bankroll + parseInt(bet));
    } else if (playerScore <= 21 && botScore > 21) {
      setBankroll(bankroll + parseInt(bet));
    } else if (
      playerScore <= 21 &&
      botScore <= 21 &&
      playerScore === botScore
    ) {
      setBankroll(bankroll);
    } else if (playerScore < botScore && botScore <= 21) {
      setBankroll(bankroll - parseInt(bet));
    } else if ((playerScore > 21) & (botScore > 21)) {
      setBankroll(bankroll);
    } else {
      setBankroll(bankroll - parseInt(bet));
    }
    setRandomCards([]);
    setIsStarting(false);
    setBotCards([]);
    setCards([]);
    setIsPlayerStand(false);
    setBet(1);
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
          <PlayerInfo bet={bet} bankroll={bankroll} />
        </GameContainer>
      ) : (
        <StartGameButtonContainer>
          <StartGameButtonWrapper>
            {blackJackScore === 0 ? (
              <>
                <RebuyContainer>
                  You have <span>$0</span> <br /> Please rebuy
                </RebuyContainer>
                <Button modifiers={["start"]} onClick={rebuy}>
                  Rebuy
                </Button>
              </>
            ) : (
              <>
                <BetSlider bet={bet} bankroll={bankroll} onBet={setBet} />
                <Button modifiers={["start"]} onClick={startGame}>
                  Start Game
                </Button>
              </>
            )}
          </StartGameButtonWrapper>
        </StartGameButtonContainer>
      )}

      {isStarting && (
        <ToolsContainer>
          <ToolsWrapper>
            <>
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
                {isPlayerStand && (
                  <Button modifiers={["deal"]} onClick={deal}>
                    Deal
                  </Button>
                )}
              </ButtonsContainer>
            </>
          </ToolsWrapper>
        </ToolsContainer>
      )}
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

const StartGameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${Button} {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;

const StartGameButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f3;
  text-align: center;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 10px solid brown;
`;

const RebuyContainer = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
  span {
    color: brown;
    font-weight: bold;
  }
`;
