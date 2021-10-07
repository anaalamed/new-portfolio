import React from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

const Project = ({ theme }) => {

  return (
    <Box theme={theme === 'light' ? lightTheme : darkTheme} >
      <h1>Project</h1>
      <Image><img src='coderz.jpg' alt='' /></Image>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
      <Button theme={theme === 'light' ? lightTheme : darkTheme}>View here</Button>

    </Box>
  );
};
export default Project;


const Box = styled.div`
  background: ${props => props.theme.topBar};
  width: 15rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;

  p {
    text-align: center;
  }

`;

const Image = styled.div`
  
  img {
      border-radius: 50%;
      width: 8rem;
      height: 6rem;

  }
`;

const Button = styled.button`
  background: ${props => props.theme.button};
  width: 100%;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;