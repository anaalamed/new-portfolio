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

        const res2 = await fetch("https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio.appspot.com/o/projects_adds.txt?alt=media&token=b244ec62-5b53-4471-ae3b-db544478eb65")
        const projects_adds = await res2.json();

        var merged_arr = repos.map(repo => {
            let adds = projects_adds.find(project => repo.id === project.id);
            return { ...adds, ...repo };
        })

        setRepos(merged_arr);
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

  @media only screen and (max-width: 812px) {
    padding: 1rem ;
  }
`;




