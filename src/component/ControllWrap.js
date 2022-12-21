import React from "react";
import styled from "styled-components";
import { useSetting } from "../CustomHook.js/SettingProvider";
import ColorPicker from "./ColorPicker";
import Slider from "./Slider";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ColorBtn = styled.button`
  width: 120px;
  height: 24px;
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.border};
`;

export default function ControllWrap({ toggleTheme }) {
  const {
    height,
    width,
    fontSize,
    setHeight,
    setWidth,
    setFontSize,
    textColor,
    bgColor,
    setTextColor,
    setBgColor,
  } = useSetting();
  return (
    <Container>
      {" "}
      <ColorBtn onClick={toggleTheme}>색상 변경</ColorBtn>
      <Slider
        name="폰트"
        objKey="fontSize"
        value={fontSize}
        setValue={setFontSize}
      />
      <Slider
        name="가로길이(Width)"
        objKey="width"
        unit="px"
        max={800}
        value={height}
        setValue={setHeight}
      ></Slider>
      <Slider
        name="세로길이(Height)"
        objKey="height"
        unit="px"
        max={800}
        value={width}
        setValue={setWidth}
      ></Slider>
      <ColorPicker value={textColor} setValue={setTextColor} name="TextColor" />
      <ColorPicker value={bgColor} setValue={setBgColor} name="BgColor" />
    </Container>
  );
}
