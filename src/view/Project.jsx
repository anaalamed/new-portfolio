import React from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import { GrGithub } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';

import { lightTheme, darkTheme } from '../styles/theme';

const Project = ({ theme, repo }) => {

  return (
    <Box theme={theme === 'light' ? lightTheme : darkTheme} >
      <h1>{repo.name}</h1>
      <Image><img src={repo.image_url || "https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio.appspot.com/o/projectDefaultImg.jpeg?alt=media&token=38d06bf9-e833-4c42-b4bf-f9cf0558c274"} alt='' /></Image>

      <p>{repo.description}</p>
      <p>last updated: {dayjs(repo.updated_at).format('DD-MM-YY')}</p>
      <Buttons>
        <Button theme={theme === 'light' ? lightTheme : darkTheme}><a href={repo.html_url} target="_blank" rel="noreferrer"><GrGithub /></a></Button>
        {(repo.homepage) ? (
          <Button theme={theme === 'light' ? lightTheme : darkTheme}><a href={repo.homepage} target="_blank" rel="noreferrer"><CgWebsite /></a></Button>
        ) : null}

      </Buttons>
    </Box>
  );
};
export default Project;


const Box = styled.div`
  background: ${props => props.theme.topBar};
  width: 20rem;
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;

  p {
    text-align: center;
  }

  @media only screen and (max-width: 812px) {
    width: 15rem;
  }
`;

const Image = styled.div`
  
  img {
      border-radius: 10rem;
      width: 13rem;
      /* height: 9rem; */
      object-fit: contain;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background: ${props => props.theme.button};
  padding: 0.5rem 3rem;
  border-radius: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 812px) {
    padding: 0.5rem 2rem;

  }
`;