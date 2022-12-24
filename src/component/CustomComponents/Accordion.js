import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSetting } from "../../CustomHook.js/SettingProvider";

// * styled-component is under the function component

export default function Accordion() {
  const { fontSize } = useSetting();
  const contentRef = useRef();
  const wrapRef = useRef();
  useEffect(() => {
    if (wrapRef.current.clientHeight !== 0) {
      wrapRef.current.style.height = `${contentRef.current.offsetHeight}px`;
      console.log(contentRef.current.offsetHeight);
    }
  });
  return (
    <Container fontSize={fontSize}>
      <Panel>
        <p>제목</p>
        <button
          onClick={() => {
            if (wrapRef.current.clientHeight > 0) {
              wrapRef.current.style.height = 0;
            } else {
              wrapRef.current.style.height = `${
                contentRef.current.offsetHeight +
                contentRef.current.clientWidth * 0.1
              }px`;
            }
          }}
        >
          버튼
        </button>
      </Panel>

      <SectionWrap ref={wrapRef} fontSize={fontSize}>
        <Content ref={contentRef}>
          <Section>내용</Section>
          <Section>내용</Section>
          <Section>내용</Section>
          <Section>내용</Section>
          <Section>내용</Section>
        </Content>
      </SectionWrap>
      {/* <Section>content</Section>
      <Section>content</Section>
      <Section>content</Section> */}
    </Container>
  );
}

const Section = styled.div`
  width: 100%;
  background-color: #888888;
  border-radius: 4px;
  color: lightgrey;
  font-size: inherit;
  padding: 2% 2%;
  margin: 1% 0px;
`;

const Content = styled.div``;

const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #555555;
  border-radius: 4px;
  & > p {
    color: white;
  }
  padding: 2% 2%;
`;

const SectionWrap = styled.div.attrs((props) => ({
  style: { fontSize: `${props.fontSize * 0.75}px` },
}))`
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: all 0.5s ease;
`;

const Container = styled.div.attrs((props) => ({
  style: { fontSize: `${props.fontSize}px` },
}))`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
