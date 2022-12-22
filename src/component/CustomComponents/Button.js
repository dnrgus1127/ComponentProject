import React from "react";
import styled from "styled-components";
import { useSetting } from "../../CustomHook.js/SettingProvider";

export default function Button() {
  const { bgColor, textColor, fontSize } = useSetting();
  return (
    <Container
      bg={bgColor}
      textColor={textColor}
      fontSize={fontSize}
      onClick={() => {}}
    >
      Button
    </Container>
  );
}

const Container = styled.button.attrs((props) => ({
  style: {
    backgroundColor: props.bg,
    fontSize: `${props.fontSize}px`,
    color: props.textColor,
  },
}))`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
