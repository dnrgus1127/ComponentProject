import React from "react";
import { useSetting } from "../CustomHook.js/SettingProvider";
import Button from "./Button";

export function PickedComponent({ pickCode }) {
  const { bgColor } = useSetting();
  switch (pickCode) {
    case "Button":
      return <Button bgColor={bgColor} />;
    case "A":
      return <p>가나다라마바사</p>;

    default:
      return <h1>이 곳에 엘리먼트가 표시됩니다.</h1>;
  }
}
