import React from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';
import { Title } from '../styles/global';

import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';


const Contact = ({ theme }) => {

    return (
        <Box id="contact" theme={theme === 'light' ? lightTheme : darkTheme}>
            <Title>CoderZ Workout</Title>
            <p>coderz.workout@example.com</p>
            <Icons>
                <h2><IoDocumentAttachOutline /></h2>
                <h2><GrGithub /></h2>
                <h2><GrLinkedinOption /></h2>
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
    }

`;