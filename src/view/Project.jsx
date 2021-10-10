import React from "react";
import styled from "styled-components";
import { GrGithub } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';



import { lightTheme, darkTheme } from '../styles/theme';

const Project = ({ theme, repo }) => {

  return (
    <Box theme={theme === 'light' ? lightTheme : darkTheme} >
      <h1>{repo.name}</h1>
      <Image><img src={repo.owner.avatar_url} alt='' /></Image>

      <p>{repo.description}</p>
      <p>last updated: {repo.updated_at.substring(0, 10)}</p>
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
      border-radius: 50%;
      width: 11rem;

  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* align-self: flex-end; */
`;

const Button = styled.button`
  background: ${props => props.theme.button};
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
  }
`;