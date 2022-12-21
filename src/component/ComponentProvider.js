import React from "react";
import styled from "styled-components";
import { useSetting } from "../CustomHook.js/SettingProvider";
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

export default function ComponentProvider({ ComponentCode }) {
  const { width, height, fontSize, textColor, bgColor } = useSetting();

  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      color={textColor}
    >
      <PickedComponent
        bgColor={bgColor}
        pickCode={ComponentCode}
      ></PickedComponent>
    </Container>
  );
}
