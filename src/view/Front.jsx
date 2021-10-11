import React from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { lightTheme, darkTheme } from '../styles/theme';
import Pdf from '../documents/cv.pdf';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const Front = ({ theme }) => {

  return (
    <Box id="front">
      <Skica>
        <Details>
          <Title>Ana Levit</Title>
          <p>Junior Front End Developer</p>
          <AnchorLink offset='140' href='#about'>
            <Button theme={theme === 'light' ? lightTheme : darkTheme}>About me</Button>
          </AnchorLink>
        </Details>
        <Image><img src='2.svg' alt='' /></Image>
      </Skica>

      <Icons>
        <h2><a href={Pdf} target="_blank" rel="noreferrer"><IoDocumentAttachOutline /></a></h2>
        <h2><a href="https://github.com/anaalamed" target="_blank" rel="noreferrer"><GrGithub /></a></h2>
        <h2><a href="https://www.linkedin.com/in/ana-levit-2934a0150" target="_blank" rel="noreferrer"><GrLinkedinOption /></a></h2>
      </Icons>

    </Box>
  );
};
export default Front;


const Box = styled.section`
  background: ${props => props.theme.front};
  /* margin-top: 4rem; */
  display: flex;
  justify-content: space-between;
  padding: 0 3rem ;

  @media only screen and (max-width: 1200px) {
      padding: 1rem 0 ;
      margin-top: 6rem;
      flex-direction: column;
      align-items: center;
    }
`;

const Skica = styled.div`
  height: 60rem;

  @media only screen and (max-width: 1200px) {
    height: 40rem;
  }

  @media only screen and (max-width: 812px) {
    height: 20rem;
  }

`;

const Image = styled.div`
position: relative;
top: -12rem;

  img {
    width: 60rem;

    @media only screen and (max-width: 1200px) {
      width: 50rem;
    }
      
    @media only screen and (max-width: 812px) {
      width: 25rem;
      padding: 0;
    }
  }

`;

const Details = styled.div`
  /* background-image: url(../assets/images/2.svg); */
  position: relative;
  background-repeat:repeat-y;
  left: 9rem;
  top: 15rem;
  font-size: 3rem;
  z-index: 10;

  h1, p {
    margin: 1.5rem;
  }

  @media only screen and (max-width: 1200px) {
    left: 9rem;
    top: 11rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 812px) {
    left: 3rem;
    top: 3rem;
    font-size: 1.5rem;
    width: max-content;
    margin-right: 0;


  }
  

  /* @media only screen and (max-width: 650px) {
    top: 5rem;
    left: 2rem;
  } */
`;

const Title = styled.h1`
  font-size: 7rem;
  text-shadow: 4px 4px 2px #585858;
  text-align: left;

  @media only screen and (max-width: 1200px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 812px) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  background: ${props => props.theme.body};
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 0 1rem;
  font-size: 1.2rem;

  @media only screen and (max-width: 812px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 1rem;
        font-size: 4rem;
        cursor: pointer;

        a {
          color: white;
        }
        
        @media only screen and (max-width: 1200px) {
          font-size: 2.5rem;
        }

        @media only screen and (max-width: 812px) {
          font-size: 1.8rem;
        }

    }
`;




