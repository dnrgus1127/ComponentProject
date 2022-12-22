import React, { useRef } from "react";
import styled from "styled-components";
import { useSetting } from "../../CustomHook.js/SettingProvider";

export default function Accordion() {
  const { fontSize } = useSetting();
  const contentRef = useRef();
  const wrapRef = useRef();
  return (
    <Container fontSize={fontSize}>
      <Panel>
        <p>제목</p>
        <button
          onClick={() => {
            if (wrapRef.current.clientHeight > 0) {
              wrapRef.current.style.height = 0;
            } else {
              wrapRef.current.style.height = `${contentRef.current.clientHeight}px`;
            }
          }}
        >
          버튼
        </button>
      </Panel>

      <SectionWrap ref={wrapRef}>
        <Section ref={contentRef}>내용</Section>
      </SectionWrap>
      {/* <Section>content</Section>
      <Section>content</Section>
      <Section>content</Section> */}
    </Container>
  );
}

const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #555555;
  border-radius: 4px;
  & > p {
    color: white;
  }
`;

const SectionWrap = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  margin: 4px 0px;
  transition: all 0.2s ease-in-out;
`;

const Section = styled.div`
  width: 100%;
  background-color: #888888;
  border-radius: 4px;
  color: lightgrey;
`;

const Container = styled.div.attrs((props) => ({
  style: { fontSize: `${props.fontSize}px` },
}))`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
