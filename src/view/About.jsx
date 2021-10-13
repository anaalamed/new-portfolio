import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from '../styles/global';
// import WordCloud from './WordCloud'

const About = ({ avatar }) => {

  return (
    <ThemeConsumer>
      {theme =>
        <Box id='about' >
          <Title>About</Title>

          <Content>
            <Image><img src={avatar} alt='' /></Image>

            <Details>

              <p>I have completed my bachelor's degree in Electrical and Electronics Engineering, but my passion is coding! <br></br>
                I'm a graduate of Full Stack Development course searching for my first opportunity as a developer. <br></br>
                I’m coding for at least 3 hours every day. <br></br>
                I come with a hands-on approach. <br></br>
                I’m a quick learner. <br></br><br></br>
                Skills:
              </p>


              <Icons>
                <img src={`https://img.shields.io/badge/HTML5-${theme.topBar.substring(1)}?logo=html5&logoColor=E34F26`} alt="HTML5 logo" title="HTML5" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/CSS3-${theme.topBar.substring(1)}?logo=css3&logoColor=1572B6`} alt="CSS3 logo" title="CSS3" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/Sass-${theme.topBar.substring(1)}?logo=sass&logoColor=CC6699`} alt="Sass logo" title="Sass" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/JavaScript-${theme.topBar.substring(1)}?logo=javascript&logoColor=F7DF1E`} alt="JavaScript logo" title="JavaScript" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/jQuery-${theme.topBar.substring(1)}?logo=jquery&logoColor=2331eb`} alt="jquery logo" title="jquery" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/-React-%23${theme.topBar.substring(1)}?logo=react&logoColor=61DAFB%22%20alt=%22React%20Native%20logo`} alt="React logo" title="React" height="30" />&nbsp;
          <img src={`https://img.shields.io/badge/Redux-${theme.topBar.substring(1)}?logo=redux&logoColor=764ABC`} alt="Redux logo" title="Redux" height="30" />&nbsp;
          <img src={`https://img.shields.io/static/v1?label=&message=styled-components&color=${theme.topBar.substring(1)}&logo=styled-components&logoColor=DB7093`} alt="styled-components logo" title="styled-components" height="30" />&nbsp;<br></br>
                <img src={`https://img.shields.io/badge/Node.js-${theme.topBar.substring(1)}?logo=node.js&logoColor=339933`} alt="Node.js logo" title="Node.js" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/Express-${theme.topBar.substring(1)}?logo=express&logoColor=FFFFFF`} alt="Express.js logo" title="Express.js" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/TypeScript-${theme.topBar.substring(1)}?logo=typescript&logoColor=3178C6`} alt="TypeScript logo" title="TypeScript" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/MongoDB-${theme.topBar.substring(1)}?logo=mongodb&logoColor=47A248`} alt="MongoDB logo" title="MongoDB" height="30" />&nbsp; <br></br>
                <img src={`https://img.shields.io/badge/Firebase-${theme.topBar.substring(1)}?logo=firebase&logoColor=FFCA28`} alt="Firebase logo" title="Firebase" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/Heroku-${theme.topBar.substring(1)}?logo=heroku&logoColor=6432a8`} alt="Heroku logo" title="Heroku" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/git-${theme.topBar.substring(1)}?logo=git&logoColor=F05032`} alt="git logo" title="git" height="30" />&nbsp;
          <img src={`https://img.shields.io/badge/VS%20Code-${theme.topBar.substring(1)}?logo=visual-studio-code&logoColor=007ACC`} alt="Visual Studio Code logo" title="Visual Studio Code" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/Postman-${theme.topBar.substring(1)}?logo=postman&logoColor=e35b17`} alt="Postman logo" title="Postman" height="30" /> &nbsp;
          <img src={`https://img.shields.io/badge/Gatsby-${theme.topBar.substring(1)}?logo=gatsby&logoColor=6115a3`} alt="Gatsby logo" title="Gatsby" height="30" /> &nbsp;

            </Icons>
            </Details>
          </Content>
        </Box >
      }

      {/* <WordCloud></WordCloud> */}
    </ThemeConsumer>
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

const Details = styled.div`
    img {
      margin-bottom: 5px;
    }
`;

const Icons = styled.div`
  text-align: center;
`;


