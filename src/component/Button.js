import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};

  &:hover {
    background-color: ${(props) => props.bg};
  }
`;

export default function Button({ onClick, bgColor }) {
  return (
    <Container bg={bgColor} onClick={onClick}>
      Button
    </Container>
  );
}
