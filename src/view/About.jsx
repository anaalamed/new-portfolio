import React from "react";
import styled from "styled-components";

import { Title } from '../styles/global';

const About = ({ avatar }) => {

  return (
    <Box id='about' >
      <Title>About</Title>
      <Content>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Image><img src={avatar} alt='' /></Image>
      </Content>

    </Box>
  );
};
export default About;


const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;

`;

const Content = styled.div`
  display: flex;

  p {
    font-size: 1.5rem;
  }
`;

const Image = styled.div`
  margin-left: 1rem;

  img {
      border-radius: 50%;
      width: 20rem;
      height: 20rem;
  }
`;

