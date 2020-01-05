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

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: content-box; 
    font-family: "eurostile", sans-serif;
    background-color: ${props => props.theme.backgroundColor}; 
    color: ${props => props.theme.fontColor} ;
  }

  a { 
    color: ${props => props.theme.headingColor} ;;
  }
`
const TemplateContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`

export default ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <GlobalStyle />
      <TemplateContainer>
        <Nav />
        {children}
      </TemplateContainer>
    </React.Fragment>
  </ThemeProvider>
)
