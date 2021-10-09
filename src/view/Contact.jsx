import React from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';
import { Title } from '../styles/global';

import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import Pdf from '../documents/cv.pdf';


const Contact = ({ theme }) => {

    return (
        <Box id="contact" theme={theme === 'light' ? lightTheme : darkTheme}>
            <Title>Ana Levit</Title>
            <p>anaalamed@gmail.com</p>
            <Icons>
                <h2><a href={Pdf} target="_blank" rel="noreferrer"><IoDocumentAttachOutline /></a></h2>
                <h2><a href="https://github.com/anaalamed" target="_blank" rel="noreferrer"><GrGithub /></a></h2>
                <h2><a href="https://www.linkedin.com/in/ana-levit-2934a0150" target="_blank" rel="noreferrer"><GrLinkedinOption /></a></h2>
            </Icons>
        </Box>
    );
};
export default Contact;


const Box = styled.footer`
  background: ${props => props.theme.topBar};
  text-align: center;
  padding: 5rem;
  
  h1 {
      margin: auto 0;
      
  }

`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 1rem;
        cursor: pointer;

        a{
        color: white;
        }
    }

`;