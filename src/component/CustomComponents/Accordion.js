import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSetting } from "../../CustomHook.js/SettingProvider";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { HexControll } from "../../globalFunc/HexColorControll";

// * styled-component is under the function component

export default function Accordion() {
  const { fontSize, bgColor, textColor } = useSetting();
  const [expansionState, setExpansionState] = useState(false);
  const contentRef = useRef();
  const wrapRef = useRef();
  // * inline style ////////////////////////////////
  const panelStyle = { color: textColor, backgroundColor: bgColor };
  const contentStyle = {
    backgroundColor: HexControll(bgColor, 0.8),
    color: textColor,
  };
  // * ////////////////////////////////////////////

  useEffect(() => {
    if (expansionState) {
      wrapRef.current.style.height = `${contentRef.current.clientHeight * 2}px`;
    } else {
      wrapRef.current.style.height = 0;
    }
  });

  return (
    <Container fontSize={fontSize}>
      <Panel style={panelStyle}>
        <p>Title</p>
        <ExpansionIcon
          onClick={() => {
            if (expansionState) {
              setExpansionState(false);
            } else {
              setExpansionState(true);
            }
          }}
        >
          <IoIosArrowDropdownCircle
            style={
              expansionState
                ? { transform: "rotate(-180deg)", transition: "0.3s all ease" }
                : { transition: "0.3s all ease" }
            }
            color={textColor}
            size={fontSize > 14 ? fontSize : 14}
          />
        </ExpansionIcon>
      </Panel>

      <SectionWrap ref={wrapRef} fontSize={fontSize}>
        <Content ref={contentRef}>
          <Section style={contentStyle}>Content</Section>
          <Section style={contentStyle}>Content</Section>
          <Section style={contentStyle}>Content</Section>
          <Section style={contentStyle}>Content</Section>
          <Section style={contentStyle}>Content</Section>
        </Content>
      </SectionWrap>
      {/* <Section>content</Section>
      <Section>content</Section>
      <Section>content</Section> */}
    </Container>
  );
}

const ExpansionIcon = styled.button`
  border: none;
  background: none;
  transition: 1s all ease;
  &:hover {
    scale: 1.5;
  }
`;

const Section = styled.div`
  width: 100%;
  background-color: #888888;
  border-radius: 8px;
  color: lightgrey;
  font-size: inherit;
  padding: 2% 4%;
  margin: 1% 0px;
  &:hover {
    background-color: grey;
  }
`;

const Content = styled.div``;

const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #555555;
  border-radius: 8px;

  padding: 2% 4%;
`;

const SectionWrap = styled.div.attrs((props) => ({
  style: { fontSize: `${props.fontSize * 0.75}px`, color: props.textColor },
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
