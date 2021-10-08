import React from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

import About from './About';
import Projects from './Projects';
import Front from './Front';


const Main = ({ theme }) => {

    return (
        <>
            <Front></Front>

            <Box theme={theme === 'light' ? lightTheme : darkTheme}>
                <About ></About>
                <Projects theme={theme} ></Projects>
            </Box>
        </>


    );
};
export default Main;


const Box = styled.main`
  background: ${props => props.theme.about};
  padding: 2.5rem 5rem;

`;



