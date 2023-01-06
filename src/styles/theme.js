const commonTheme = {
  border: "#767676",
  hoverColor: "grey",
};

export const lightTheme = {
  bgColor: "#e1dcd9",
  textColor: "black",
  inputColor: "#d1ccc9",
  complementaryColor: "white",
  ...commonTheme,
};

export const darkTheme = {
  bgColor: "#212426",
  textColor: "white",
  inputColor: "#2d2f34",
  hoverColor: "#424348",
  complementaryColor: "black",
  ...commonTheme,
};

export const theme = {
  lightTheme,
  darkTheme,
};
