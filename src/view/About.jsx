import React from "react";
import styled from "styled-components";

import { Title } from '../styles/global';
// import WordCloud from './WordCloud'

const About = ({ avatar }) => {

  return (
    <Box id='about' >
      <Title>About</Title>
      <Content>
        <Image><img src={avatar} alt='' /></Image>
        <p>I have completed my bachelor's degree in Electrical and Electronics Engineering, but my passion is coding! <br></br>
        I'm a graduate of Full Stack Development course searching for my first opportunity as a developer. <br></br>
        I’m coding for at least 3 hours every day. <br></br>
        I come with a hands-on approach. <br></br>
        I’m a quick learner. <br></br><br></br>
        I have knowledge in: <br></br>
          {/* </p> */}
          <img src="https://img.shields.io/badge/HTML5-282C34?logo=html5&logoColor=E34F26" alt="HTML5 logo" title="HTML5" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/CSS3-282C34?logo=css3&logoColor=1572B6" alt="CSS3 logo" title="CSS3" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/Sass-282C34?logo=sass&logoColor=CC6699" alt="Sass logo" title="Sass" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E" alt="JavaScript logo" title="JavaScript" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/jQuery-282C34?logo=jquery&logoColor=2331eb" alt="jquery logo" title="jquery" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/-React-%23282C34?logo=react&logoColor=61DAFB%22%20alt=%22React%20Native%20logo" alt="React logo" title="React" height="30" />&nbsp;
          <img src="https://img.shields.io/badge/Redux-282C34?logo=redux&logoColor=764ABC" alt="Redux logo" title="Redux" height="30" />&nbsp;
          <img src="https://img.shields.io/static/v1?label=&message=styled-components&color=282C34&logo=styled-components&logoColor=DB7093" alt="styled-components logo" title="styled-components" height="30" />&nbsp;<br></br>
          <img src="https://img.shields.io/badge/Node.js-282C34?logo=node.js&logoColor=339933" alt="Node.js logo" title="Node.js" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/Express-282C34?logo=express&logoColor=FFFFFF" alt="Express.js logo" title="Express.js" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=3178C6" alt="TypeScript logo" title="TypeScript" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/MongoDB-282C34?logo=mongodb&logoColor=47A248" alt="MongoDB logo" title="MongoDB" height="30" />&nbsp; <br></br>
          <img src="https://img.shields.io/badge/Firebase-282C34?logo=firebase&logoColor=FFCA28" alt="Firebase logo" title="Firebase" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/Heroku-282C34?logo=heroku&logoColor=6432a8" alt="Heroku logo" title="Heroku" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/git-282C34?logo=git&logoColor=F05032" alt="git logo" title="git" height="30" />&nbsp;
          <img src="https://img.shields.io/badge/VS%20Code-282C34?logo=visual-studio-code&logoColor=007ACC" alt="Visual Studio Code logo" title="Visual Studio Code" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/Postman-282C34?logo=postman&logoColor=e35b17" alt="Postman logo" title="Postman" height="30" /> &nbsp;
          <img src="https://img.shields.io/badge/Gatsby-282C34?logo=gatsby&logoColor=6115a3" alt="Gatsby logo" title="Gatsby" height="30" /> &nbsp;
          {/* <img src="" alt=" logo" title="" height="30" /> &nbsp; */}
        </p>
      </Content>

      {/* <WordCloud></WordCloud> */}
    </Box >
  );
};
export default About;


const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;

`;

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  p {
    font-size: 1.5rem;
    text-align: left;

    img {
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 1012px) {
      p {
        font-size: 1rem;
      }
    }

  @media only screen and (max-width: 812px) {
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1rem;
      }
    }
`;

const Image = styled.div`
  margin-left: 1rem;
  
  img {
      border-radius: 50%;
      width: 20rem;
      height: 20rem;

      @media only screen and (max-width: 812px) {
        width: 15rem;
        height: 15rem;
      }
  }
`;


