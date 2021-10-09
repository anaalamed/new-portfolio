import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from '../styles/theme';

import About from './About';
import Projects from './Projects';


const Main = ({ theme }) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const res = await fetch("https://api.github.com/users/anaalamed/repos");
        const repos = await res.json();
        setRepos(repos);
    }

    useEffect(() => {
        async function getRepos() {
            return await fetchRepos();
        }
        getRepos();
    }, [])

    return (
        <Box theme={theme === 'light' ? lightTheme : darkTheme}>
            <About avatar={repos[0]?.owner.avatar_url}></About>
            <Projects theme={theme} repos={repos}></Projects>
        </Box>
    );
};
export default Main;

const Box = styled.main`
  width: 100%;
  background: ${props => props.theme.about};
  padding: 1rem 6rem;
`;




