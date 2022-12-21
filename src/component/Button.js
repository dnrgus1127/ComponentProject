import React from "react";
import styled from "styled-components";
import { useSetting } from "../CustomHook.js/SettingProvider";

const Container = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};

  &:hover {
    background-color: ${(props) => props.bg};
  }
`;

export default function Button() {
  const { bgColor } = useSetting();
  return (
    <Container bg={bgColor} onClick={() => {}}>
      Button
    </Container>
  );
}
