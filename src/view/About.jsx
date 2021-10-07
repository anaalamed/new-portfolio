import React, { useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

const About = () => {

  return (
    <Box id='about' >
      <h1>About</h1>
      <Content>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Image><img src='coderz.jpg' /></Image>
      </Content>

    </Box>
  );
};
export default About;


const Box = styled.section`
  margin-bottom: 3rem;
  margin-top: 2rem;

`;

const Content = styled.div`
  display: flex;
`;

const Image = styled.div`
  
  img {
      border-radius: 50%;
      width: 30rem;

  }
`;

