import React, { useState } from "react";
import styled from 'styled-components';

import TopBar from './view/TopBar'
import Main from './view/Main'
import Contact from './view/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Box>
      <TopBar theme={theme} setTheme={setTheme}></TopBar>
      <Main theme={theme}></Main>
      <Contact theme={theme}></Contact>
    </Box>
  );
}

export default App;

const Box = styled.div`
  height: 100%;
`;
