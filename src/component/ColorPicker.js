import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 0px;
  margin-bottom: 12px;
  input[type="color"] {
    border: none;
    width: 48px;
  }
  input[type="text"] {
    width: 25%;
    text-align: center;
    font-size: 18px;
    background-color: ${({ theme }) => theme.inputColor};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    color: ${({ theme }) => theme.textColor};
  }
  input {
    height: 24px;
    margin-right: 12px;
  }
  p {
    margin-right: 12px;
    margin-bottom: 4px;
  }
  .flex {
    display: flex;
  }
`;

export default function ColorPicker({ setting, setSetting, objKey }) {
  const obj = setting;
  const refColor = useRef();
  const refInput = useRef();
  return (
    <Container>
      <p>{objKey}</p>
      <div className="flex">
        <input
          ref={refInput}
          type="text"
          placeholder="#000000"
          onChange={(e) => {
            if (e.target.value.length === 7) {
              refColor.current.value = e.target.value;
            }
          }}
        />
        <input
          ref={refColor}
          type="color"
          onChange={(e) => {
            refInput.current.value = e.target.value;
            obj[objKey] = e.target.value;
            setSetting({ ...obj });
          }}
        />
      </div>
    </Container>
  );
}