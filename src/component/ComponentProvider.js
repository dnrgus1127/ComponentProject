import React from "react";
import styled from "styled-components";
import { PickedComponent } from "./PickedComponent";

const Container = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: 0 auto;
  * {
    font-size: ${(props) => `${props.fontSize}px`};
    border: 1px solid ${({ theme }) => theme.border};
    /* color: ${({ theme }) => theme.textColor}; */
    color: ${(props) => props.color};
  }
`;

export default function ComponentProvider({ ComponentCode, setting }) {
  return (
    <Container
      width={setting.width}
      height={setting.height}
      fontSize={setting.fontSize}
      color={setting.textColor}
    >
      <PickedComponent
        bgColor={setting.bgColor}
        pickCode={ComponentCode}
      ></PickedComponent>
    </Container>
  );
}
