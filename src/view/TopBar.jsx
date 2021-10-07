import React, { useState } from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

const TopBar = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <Header theme={theme === 'light' ? lightTheme : darkTheme}>
            <Logo src="coderz.jpg"></Logo>
            <div>
                <Link href='#about'>About</Link>
                <Link href='#projects'>Projects</Link>
                <Link href='#contact'>Contact</Link>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    {console.log(theme)}
                    <>
                        <GlobalStyles />
                        <button onClick={toggleTheme}>Toggle theme</button>
                        <footer>
                        </footer>
                    </>
                </ThemeProvider>
            </div>
        </Header>
    );
};
export default TopBar;


const Header = styled.header`
  background: ${props => props.theme.topBar};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 2rem;
`;

const Logo = styled.img`
  width: 7rem;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 1rem;
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
`;