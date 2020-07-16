import React from "react";
import { randomCards } from "./common/cardDeck";

const Card = () => {
  const card = randomCards.pop();
  return <div>random card - {card}</div>;
};

export default Card;
