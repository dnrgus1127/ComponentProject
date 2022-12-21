import React from "react";
import styled from "styled-components";
import { useSetting } from "../CustomHook.js/SettingProvider";
import { PickedComponent } from "./PickedComponent";

const Container = styled.div.attrs((props) => ({
  style: {
    width: `${props.width}px`,
    height: `${props.height}px`,
  },
}))`
  margin: 0 auto;
  * {
    border: 1px solid ${({ theme }) => theme.border};
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
