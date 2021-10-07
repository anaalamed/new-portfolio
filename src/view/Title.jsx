import React from "react";
import styled from "styled-components";


import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const Title = ({ theme }) => {

  return (
    <Box>
      {/* <h1>CoderZ Workout</h1> */}
      <Image><img src='vectorpaint.svg' alt='' /></Image>
      <Icons>
        <h2><IoDocumentAttachOutline /></h2>
        <h2><GrGithub /></h2>
        <h2><GrLinkedinOption /></h2>
      </Icons>

    </Box>


  );
};
export default Title;


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
      border-radius: 50%;
      width: 30rem;
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

    }

`;




