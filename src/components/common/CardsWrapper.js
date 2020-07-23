import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 173px;
  width: 120px;
  border-radius: 10px;
  border: 1px solid grey;
  &:not(:last-child) {
    margin-right: -70px;
  }
`;
