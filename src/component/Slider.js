import React from "react";
import styled from "styled-components";

const Container = styled.input``;

export default function Slider({ currentSetting, valueHandle }) {
  return (
    <Container
      type="range"
      onChange={(e) => {
        valueHandle({ ...currentSetting, fontSize: `${e.target.value}px` });
      }}
    ></Container>
  );
}
