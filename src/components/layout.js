import React from "react"
import Nav from "../components/nav"

import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

const darkTheme = {
  primaryColor: "#14ffec",
  secondaryColor: "#0d7377",
  fontColor: "#fff",
  backgroundColor: "#323232",
  headingColor: "#14ffec",
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 10vh;
`

const GlobalStyle = createGlobalStyle`
  *, *::before,*::after { box-sizing: border-box; }

  body {  
    font-family: 'Courier Prime', monospace;
    background-color: ${props => props.theme.backgroundColor}; 
    color: ${props => props.theme.fontColor} ;
    margin: 0;
    padding: 2vw;
  }

  a { 
    color: ${props => props.theme.headingColor} ;;
  }
`
const TemplateContainer = styled.div`
  margin: auto;
`

export default ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <GlobalStyle />
      <TemplateContainer>
        <Nav />
        <Container>{children}</Container>
      </TemplateContainer>
    </React.Fragment>
  </ThemeProvider>
)
