import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from './styles/theme';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from "./styles/global";
import TopBar from './view/TopBar'
import Main from './view/Main'
import Contact from './view/Contact';
import Hero from './view/Hero';



function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <TopBar theme={theme} setTheme={toggleTheme}></TopBar>
          <Hero theme={theme}></Hero>
          <Main theme={theme}></Main>
          <Contact theme={theme}></Contact>

      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  );
}

export default App;

