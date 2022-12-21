import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext();
export const useSetting = () => useContext(ColorContext);

export default function SettingProvider({ children }) {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(14);
  const [height, setHeight] = useState(40);
  const [width, setWidth] = useState(240);

  return (
    <ColorContext.Provider
      value={{
        bgColor,
        textColor,
        fontSize,
        height,
        width,
        setTextColor,
        setBgColor,
        setFontSize,
        setHeight,
        setWidth,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
