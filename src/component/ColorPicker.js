import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  padding: 4px 0px;
  margin-bottom: 12px;
  input[type="color"] {
    border: none;
    width: 48px;
    background-color: ${({ theme }) => theme.inputColor};
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
  Button {
    width: 80px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.textColor};
    height: 100%;
  }
`;

export default function ColorPicker({ name, value, setValue }) {
  return (
    <Container>
      <p>{name}</p>
      <div className="flex">
        <input
          value={value}
          type="text"
          placeholder="#000000"
          onChange={(e) => {
            if (e.target.value.length === 7) {
              setValue(e.target.value);
            }
          }}
        />
        <input
          type="color"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </Container>
  );
}
