import React from "react";
import styled from "styled-components";
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

export default function ControllWrap({ setting, setSetting, toggleTheme }) {
  return (
    <Container>
      {" "}
      <ColorBtn onClick={toggleTheme}>색상 변경</ColorBtn>
      <Slider
        currentSetting={setting}
        valueHandle={setSetting}
        name="폰트"
        objKey="fontSize"
      />
      <Slider
        currentSetting={setting}
        valueHandle={setSetting}
        name="가로길이(Width)"
        objKey="width"
        unit="px"
        max={800}
      ></Slider>
      <Slider
        currentSetting={setting}
        valueHandle={setSetting}
        name="세로길이(Height)"
        objKey="height"
        unit="px"
        max={800}
      ></Slider>
      <ColorPicker/>
    </Container>
  );
}
