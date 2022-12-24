import React, { useState } from "react";
import styled from "styled-components";
import ComponentProvider from "./ComponentProvider";
import Selector from "./Selector";
import { componentArr } from "../data/componentArr";
import ComponentLog from "./ComponentLog";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1% 1%;
`;

const ComponentWrapper = styled.div`
  width: 100%;
  height: 70%;
  margin: auto;
  border: 0.5px solid ${({ theme }) => theme.border};
  padding: calc(80% * 0.01);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 2px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: ${({ theme }) => theme.textColor}; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.inputColor}; /*스크롤바 뒷 배경 색상*/
  }
`;

export default function ComponentSelector() {
  const [currentCode, setCurrentCode] = useState(0);
  const comNameArr = componentArr.map((item) => item);
  return (
    <Container>
      <Selector NameArr={comNameArr} setValue={setCurrentCode} />
      <ComponentWrapper>
        <ComponentProvider ComponentCode={currentCode} />
      </ComponentWrapper>
      <ComponentLog />
    </Container>
  );
}
