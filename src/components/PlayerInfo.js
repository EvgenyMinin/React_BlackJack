import React from "react";
import styled from "styled-components";

const PlayerInfo = ({ bet, bankroll }) => {
  return (
    <PlayerInfoContainer>
      <PlayerInfoWrapper>
        <PlayerInfoName>Player</PlayerInfoName>
        <PlayerInfoBet>Bet: ${bet}</PlayerInfoBet>
      </PlayerInfoWrapper>
      <PlayerInfoTotal>Total: ${bankroll}</PlayerInfoTotal>
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;

const PlayerInfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 6px;
`;

const PlayerInfoWrapper = styled.div`
  padding: 12px;
  border-bottom: 3px solid crimson;
`;
const PlayerInfoName = styled.div`
  color: white;
`;
const PlayerInfoBet = styled.div`
  color: white;
`;
const PlayerInfoTotal = styled.div`
  padding: 12px;
  color: white;
`;
