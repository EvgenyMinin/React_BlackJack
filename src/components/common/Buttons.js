import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  start: () => css`
    background-color: brown;
    &:hover {
      background-color: crimson;
    }
  `,
  hit: () => css`
    background-color: goldenrod;
    &:disabled {
      background-color: darkkhaki;
    }
  `,
  stand: () => css`
    background-color: lightseagreen;
  `,
  deal: () => css`
    background-color: #407855;
  `,
};

export const Button = styled.button`
  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  height: 50px;
  min-width: 70px;
  padding: 0 16px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-radius: 10px;

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
