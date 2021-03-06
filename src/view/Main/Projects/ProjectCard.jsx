import React from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import ReactTooltip from 'react-tooltip';
import { GrGithub } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';

const Project = ({ repo }) => {

  return (
    <Box >
      <h1>{repo.name}</h1>
      <Image><img src={repo.image_url || "https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio.appspot.com/o/projectDefaultImg.jpeg?alt=media&token=38d06bf9-e833-4c42-b4bf-f9cf0558c274"} alt='' /></Image>

      <p>{repo.description}</p>
      <p>last updated: {dayjs(repo.updated_at).format('DD-MM-YY')}</p>
      <Buttons>
        <Button ><a href={repo.html_url} target="_blank" rel="noreferrer"><GrGithub data-tip data-for="github" /></a></Button>
        {(repo.homepage) ? (
          <Button ><a href={repo.homepage} target="_blank" rel="noreferrer"><CgWebsite data-tip data-for="website" /></a></Button>
        ) : null}
      </Buttons>

      <ReactTooltip id="github" place="top" effect="solid" backgroundColor={(props => props.theme.topBar)} textColor={"white"}>GitHub</ReactTooltip>
      <ReactTooltip id="website" place="top" effect="solid" backgroundColor={(props => props.theme.topBar)} textColor={"white"}>Website</ReactTooltip>



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
  min-height: 25rem;

  p {
    text-align: center;
    font-size: 1rem;
  }

  @media only screen and (max-width: 812px) {
    width: 16rem;
  }
`;

const Image = styled.div`
  
  img {
      border-radius: 10rem;
      width: 14rem;
      height: 8rem;
      /* object-fit: contain; */
      margin-bottom: 0.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background: ${props => props.theme.button};
  padding: 0.3rem 3rem 0 3rem;
  border-radius: 1rem;
  cursor: pointer;

  a {
    color: white;
    font-size: 1.5rem;
    /* vertical-align: middle; */
    margin-top: 1rem;
  }

  @media only screen and (max-width: 812px) {
    padding: 0.2rem 2rem 0 2rem;

    a {
    font-size: 1rem;
    }
  
  }
`;