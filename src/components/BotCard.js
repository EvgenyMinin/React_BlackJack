import React from "react";
import { CardsContainer, ScoreContainer } from "./common/CardsContainer";
import { CardWrapper } from "./common/CardsWrapper";
import styled from "styled-components";

const BotCard = ({ botCards, botScore, isPlayerStand }) => {
  return (
    <CardsContainer>
      {isPlayerStand ? (
        <ScoreContainer>{botScore}</ScoreContainer>
      ) : (
        <ScoreContainer>?</ScoreContainer>
      )}

      {botCards.map((card) => (
        <CardWrapper key={card} className={card}></CardWrapper>
      ))}
      {!isPlayerStand && (
        <BlankCard>
          <CardWrapper className="cardBack"></CardWrapper>
        </BlankCard>
      )}
    </CardsContainer>
  );
};

export default BotCard;

const BlankCard = styled.div``;
