import React, { useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';
import Project from './Project'

const Projects = () => {

    return (
        <Box id='projects' >
            <h1>Projects</h1>
            <Collection>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>

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