import React from "react";
import { randomCards } from "./common/cardDeck";
// import { randomCards } from "./common/cardDeck";

const PlayerCard = ({ cards }) => {
  return <div>Player - {cards}</div>;
};

export default PlayerCard;
