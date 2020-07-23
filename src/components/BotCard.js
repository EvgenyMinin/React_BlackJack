import React from "react";
import { CardsContainer } from "./common/CardsContainer";
import { CardWrapper } from "./common/CardsWrapper";
import styled from "styled-components";

const BotCard = ({ botStartCards }) => {
  return (
    <CardsContainer>
      {botStartCards.map((card) => (
        <CardWrapper key={card} className={card}></CardWrapper>
      ))}
      <BlankCard>
        <CardWrapper className="cardBack"></CardWrapper>
      </BlankCard>
    </CardsContainer>
  );
};

export default BotCard;

const BlankCard = styled.div``;
