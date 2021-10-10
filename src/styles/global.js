import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,body,#root{min-height:100%}

  body {
    background: ${({ theme }) => theme.body};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    min-height:100%;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
  }

  .toggle {
    margin-top: 0.4rem;
  }
  `

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 4px 4px 2px #585858;
`;