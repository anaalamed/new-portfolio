import React from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { lightTheme, darkTheme } from '../styles/theme';
import Toggle from './Toogle'

const TopBar = ({ theme, setTheme }) => {

  return (
    <Header theme={theme === 'light' ? lightTheme : darkTheme}>
      <Logo src="logo.png"></Logo>
      <div>
        <Link offset='140' href='#about'>About</Link>
        <Link offset='140' href='#projects'>Projects</Link>
        <Link href='#contact'>Contact</Link>
        <Toggle setTheme={setTheme}></Toggle>
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
  padding: 0.4rem 2rem;
`;

const Logo = styled.img`
  width: 7rem;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 1rem;
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
`;