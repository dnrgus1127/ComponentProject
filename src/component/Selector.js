import React from "react";
import styled from "styled-components";

const Container = styled.select`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.textColor};
  padding: 0 8px;
  font-size: 18px;
  outline: none;
  margin-bottom: 24px;
`;

const Option = styled.option`
  background-color: white;
  color: ${({ theme }) => theme.complementaryColor};
  font-size: 14px;
`;

export default function Selector({ NameArr, setValue }) {
  return (
    <Container
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <Option value="none" disabled>
        === 선택 ===
      </Option>
      {NameArr.map((item, idx) => (
        <Option key={idx} value={item}>
          {item}
        </Option>
      ))}
    </Container>
  );
}
