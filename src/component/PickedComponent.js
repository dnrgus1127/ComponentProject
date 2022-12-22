import React from "react";
import Accordion from "./CustomComponents/Accordion";
import Button from "./CustomComponents/Button";

export function PickedComponent({ pickCode }) {
  switch (pickCode) {
    case "Button":
      return <Button />;
    case "Accordion":
      return <Accordion />;
    default:
      return <h2>이 곳에 엘리먼트가 표시됩니다.</h2>;
  }
}
