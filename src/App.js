import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import ComponentSelector from "./component/ComponentSelector";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";
import ControllWrap from "./component/ControllWrap";
import SettingProvider from "./CustomHook.js/SettingProvider";

const ShowComponent = styled.div`
  width: 60%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.border};
`;
const Controller = styled.div`
  width: 40%;
  padding: 24px 24px;
`;

function App() {
  const LocalTheme = window.localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(LocalTheme);

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
      <div className='App'>
        <div style={{ display: "flex" }}>
          <SettingProvider>
            <ShowComponent>
              <ComponentSelector />
            </ShowComponent>
            <Controller>
              <ControllWrap toggleTheme={toggleTheme} />
            </Controller>
          </SettingProvider>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
