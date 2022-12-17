const commonTheme = {
  border: "#767676",
};

export const lightTheme = {
  bgColor: "#F8F7F4",
  textColor: "black",
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
