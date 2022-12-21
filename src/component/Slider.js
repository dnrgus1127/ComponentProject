import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  input[type="range"] {
    width: 55%;
    accent-color: lightgrey;
  }
  .controller {
    width: 100%;
    height: 24px;
    display: flex;
  }
  .inputFiled {
    width: 30%;
    background-color: ${({ theme }) => theme.inputColor};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    color: white;
    text-align: right;
    padding: 0 12px;
  }
  .unit {
    margin-right: 8px;
  }
`;

export default function Slider({ value, setValue, unit = "px", name, max }) {
  return (
    <Container>
      <p>{name}</p>
      <div className="controller">
        <input
          value={value}
          className="inputFiled"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <p className="unit">{unit}</p>
        <input
          type="range"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          min={1}
          value={value}
          max={max}
        ></input>
      </div>
    </Container>
  );
}
