import React from "react";
import styled from "styled-components";
import { componentArr } from "../data/componentArr";

const Container = styled.div`
  width: 50%;
  height: 10%;
  margin: 0 auto;
  * {
    font-size: ${(props) => props.fontSize};
  }
`;

export default function ComponentProvider({ ComponentCode, setting }) {
  const ComArr = componentArr;
  return (
    <Container fontSize={setting.fontSize}>
      {ComArr[ComponentCode].component}
    </Container>
  );
}
