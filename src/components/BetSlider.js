import React from "react";
import styled from "styled-components";

const BetSlider = ({ bet, bankroll, onBet }) => {
  return (
    <BetSliderContainer>
      <BetContainer>Your bet: {bet}</BetContainer>
      <SliderWrapper>
        <input
          type="range"
          min="1"
          max={bankroll}
          step="1"
          value={bet}
          onChange={(e) => onBet(e.target.value)}
        />
      </SliderWrapper>
      <MinMaxBoxWrapper>
        <span>1</span>
        <span>{bankroll}</span>
      </MinMaxBoxWrapper>
      <BankRollContainer>Total: ${bankroll}</BankRollContainer>
    </BetSliderContainer>
  );
};

export default BetSlider;

const BetSliderContainer = styled.div`
  color: brown;
  margin-bottom: 16px;
  min-width: 200px;
  input {
    width: 100%;
  }
`;

const BetContainer = styled.div`
  color: brown;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SliderWrapper = styled.div``;

const MinMaxBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BankRollContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
