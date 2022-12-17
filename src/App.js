import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import ComponentSelector from "./component/ComponentSelector";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";
import Slider from "./component/Slider";

const ShowComponent = styled.div`
  width: 60%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.border};
`;
const Controller = styled.div`
  width: 40%;
`;

const ControllWrap = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  const LocalTheme = window.localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(LocalTheme);
  const [componentSetting, setComponentSetting] = useState({
    fontSize: "12px",
  });
  const toggleTheme = () => {
    setTheme(() => {
      let themeTmp = theme === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", themeTmp);
      return themeTmp;
    });
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <div style={{ display: "flex" }}>
          <ShowComponent>
            <ComponentSelector setting={componentSetting} />
          </ShowComponent>
          <Controller>
            <ControllWrap>
              <p>Setting : {componentSetting.fontSize}</p>
              <button onClick={toggleTheme}>색상 변경</button>
              <Slider
                currentSetting={componentSetting}
                valueHandle={setComponentSetting}
              />
            </ControllWrap>
          </Controller>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
