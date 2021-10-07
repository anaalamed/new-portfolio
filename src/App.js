import React from "react";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from './styles/theme';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from "./styles/global";
import TopBar from './view/TopBar'
import Main from './view/Main'
import Contact from './view/Contact';





function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Box>
          <TopBar theme={theme} setTheme={toggleTheme}></TopBar>
          <Main theme={theme}></Main>
          <Contact theme={theme}></Contact>
      </Box>

      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  );
}

export default App;

const Box = styled.div`
  height: 100%;
`;
