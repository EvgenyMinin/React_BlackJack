import React from "react";
import { CardsContainer, ScoreContainer } from "./common/CardsContainer";
import { CardWrapper } from "./common/CardsWrapper";

const PlayerCard = ({ cards, playerScore }) => {
  return (
    <CardsContainer>
      <ScoreContainer>{playerScore}</ScoreContainer>
      {cards.map((card) => (
        <CardWrapper key={card} className={card}></CardWrapper>
      ))}
    </CardsContainer>
  );
};

export default PlayerCard;
