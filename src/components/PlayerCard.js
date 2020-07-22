import React from "react";
import { CardsContainer } from "./common/CardsContainer";
import { CardWrapper } from "./common/CardsWrapper";

const PlayerCard = ({ cards }) => {
  return (
    <CardsContainer>
      {cards.map((card) => (
        <CardWrapper className={card}></CardWrapper>
      ))}
    </CardsContainer>
  );
};

export default PlayerCard;
