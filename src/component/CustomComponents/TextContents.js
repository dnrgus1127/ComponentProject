import React from "react";
import styled from "styled-components";
import { useSetting } from "../../CustomHook.js/SettingProvider";

const Container = styled.div`
  p:hover,
  h1:hover,
  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

export default function TextContents() {
  const { fontSize } = useSetting();
  return (
    <Container>
      <p style={{ fontSize: `${fontSize}px` }}>P태그 한국어 텍스트 입니다.</p>
      <h6>h6태그 한국어 텍스트 입니다.</h6>
      <h5>h5태그 한국어 텍스트 입니다.</h5>
      <h4>h4태그 한국어 텍스트 입니다.</h4>
      <h3>h3태그 한국어 텍스트 입니다.</h3>
      <h2>h2태그 한국어 텍스트 입니다.</h2>
      <h1>h1태그 한국어 텍스트 입니다.</h1>
    </Container>
  );
}
