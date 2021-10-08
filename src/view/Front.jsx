import React from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const Front = ({ theme }) => {

  return (
    <Box>
      <Details>
        <Title>Coderz Workouts</Title>
        <p>Level Up your Skills</p>
        <AnchorLink offset='180' href='#about'>
          <Button theme={theme}>About me</Button>
        </AnchorLink>
      </Details>
      <Image><img src='2.svg' alt='' /></Image>

      <Icons>
        <h2><IoDocumentAttachOutline /></h2>
        <h2><GrGithub /></h2>
        <h2><GrLinkedinOption /></h2>
      </Icons>

    </Box>
  );
};
export default Front;


const Box = styled.section`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  padding: 3rem;


  h1 {
    text-align: center;
  }
`;

const Image = styled.div`
  img {
      width: 60rem;
  }
`;

const Details = styled.div`
  position: absolute;
  left: 10rem;
  top: 20rem;
  font-size: 4rem;

  h1, p {
    margin: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  text-align: center;
  text-shadow: 4px 4px 2px #585858;
`;

const Button = styled.button`
  background: ${props => props.theme.about};
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 0 1rem;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 1rem;
        font-size: 4rem;
        cursor: pointer;

    }
`;




