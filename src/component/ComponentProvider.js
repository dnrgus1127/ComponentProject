import React from "react";
import styled from "styled-components";
import { componentArr } from "../data/componentArr";

const Container = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: 0 auto;
  * {
    font-size: ${(props) => `${props.fontSize}px`};
    border: 1px solid ${({ theme }) => theme.border}; 
    color: ${({ theme }) => theme.textColor};
  }
`;

export default function ComponentProvider({ ComponentCode, setting }) {
  const ComArr = componentArr;
  return (
    <Container
      width={setting.width}
      height={setting.height}
      fontSize={setting.fontSize}
    >
      {ComArr[ComponentCode].component}
    </Container>
  );
}
