import React, { useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

import About from './About';
import Projects from './Projects';
import Title from './Title';


const Main = ({ theme }) => {

    return (
        <>
            <Title></Title>

            <Box theme={theme === 'light' ? lightTheme : darkTheme}>
                <About ></About>
                <Projects ></Projects>
            </Box>
        </>


    );
};
export default Main;


const Box = styled.main`
  background: ${props => props.theme.about};

`;



