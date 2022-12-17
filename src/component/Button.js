import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.inputColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;

export default function Button() {
  return <Container>Button</Container>;
}
