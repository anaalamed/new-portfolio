import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';


import Project from './Project';
import { Title } from '../styles/global';


const Projects = ({ theme, repos }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    // sort according to last update
    if (repos.length !== 0) {
        repos.sort(function (a, b) {
            var c = new Date(a.updated_at);
            var d = new Date(b.updated_at);
            return d - c;
        });
    }

    // slice for pages
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);

    const handleChangePage = pageNumber => setCurrentPage(pageNumber);

    return (
        <Box id='projects' >
            <Title>Projects</Title>
            <Collection>

                {/* {repos?.map(repo => */}
                {currentRepos?.map(repo =>
                    (<Project theme={theme} repo={repo}></Project>)
                )}
            </Collection>
            <Pagination current={currentPage} onChange={handleChangePage} total={30} />

        </Box>
    );
};
export default Projects;


const Box = styled.section`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;


`;

const Collection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;