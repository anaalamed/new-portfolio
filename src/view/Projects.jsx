import React from "react";
import styled from "styled-components";

import Project from './Project';
import { Title } from '../styles/global';


const Projects = ({ theme, repos }) => {

    return (
        <Box id='projects' >
            <Title>Projects</Title>
            <Collection>
                {repos?.map(repo =>
                    (<Project theme={theme} repo={repo}></Project>)
                )}
            </Collection>

        </Box>
    );
};
export default Projects;


const Box = styled.section`
  margin-bottom: 5rem;


`;

const Collection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;


`;