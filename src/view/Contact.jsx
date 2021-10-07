import React, { useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

const Contact = ({ theme }) => {

    return (
        <Box id="contact" theme={theme === 'light' ? lightTheme : darkTheme}>
            <h1>Contact</h1>


        </Box>
    );
};
export default Contact;


const Box = styled.footer`
  background: ${props => props.theme.topBar};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  /* background: ; */

`;