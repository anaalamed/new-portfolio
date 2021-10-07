import React, { useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

import About from './About';
import Projects from './Projects';


const Title = ({ theme }) => {

    return (
        <Box>
            <h1>CoderZ Workout</h1>
            <Image><img src='coderz.jpg' /></Image>

        </Box>


    );
};
export default Title;


const Box = styled.section`
  margin-top: 8rem;
`;

const Image = styled.div`
  
  img {
      border-radius: 50%;
      width: 30rem;

  }
`;




