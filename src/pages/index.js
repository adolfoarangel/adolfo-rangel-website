import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { Header } from "../components/header"
import SubHeader from "../components/subheader"

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 10vh 0vh;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const Paragraph = styled.p`
  font-size: 1.2rem;
`

const CodeLabel = styled.h2`
  margin-right: 1.5rem;
  font-size: 2rem;
  text-align: center;
`

const CodeComment = styled.h3`
  font-weight: 200;
  font-size: 1.5rem;
  font-style: oblique;
  margin-top: 10px; 
  margin-bottom: 5px;
`

const CodeLine = styled.h4`
  font-weight: 600;
  font-size: 1.3rem;
  margin: 0px;
`

const Select = styled.select`
  background-color: white;
  border: 0;
  border-bottom: 2px solid black;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.15em;
  border-radius: 0;
  margin: auto;
  
  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: 768px) {
    max-width: 50vw;
  }
`

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
`

const TerminalHorizontalContainer = styled(HorizontalContainer)`
  margin: 10px 0px; 
  padding: 20px; 
  background-color: black;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  justify-content: start;
  align-content: start;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default () => {
  const [techExperience, setTechExperience] = useState("PRO")

  return (
    <Layout>
      <Hero>
        <Header headerText="Tech Enthusiastic & Software Developer" />
        <SubHeader headerText="Tech Enthusiastic & Software Developer" />
      </Hero>
      <VerticalContainer>
        <HorizontalContainer>
          <CodeLabel> Tech I've used </CodeLabel>
          <Select value={techExperience} onChange={e => setTechExperience(e.target.value)}>
            <option value="PRO">Professional</option>
            <option value="FUN">For Fun</option>
          </Select>
        </HorizontalContainer>
        <TerminalHorizontalContainer>
          {techExperience === "PRO" ? (
            <div>
              <CodeComment>// Frameworks & Languages</CodeComment>
              <CodeLine>Spring Boot & MVC (Java)</CodeLine>
              <CodeLine>Angular (JavaScript & TypeScript)</CodeLine>
              <CodeLine>SCSS & CSS</CodeLine>
              <CodeComment>// Database</CodeComment>
              <CodeLine>SQL SERVER</CodeLine>
              <CodeLine>PL SQL</CodeLine>
            </div>
          ) : (
            <div>
              <CodeComment>// Frameworks & Languages</CodeComment>
              <CodeLine>Node (JavaScript & TypeScript)</CodeLine>
              <CodeLine>React (JavaScript & TypeScript)</CodeLine>
              <CodeLine>React Native (JavaScript)</CodeLine>
              <CodeComment>// Database</CodeComment>
              <CodeLine>Mongoose</CodeLine>
            </div>
          )}
        </TerminalHorizontalContainer>
      </VerticalContainer>
    </Layout>
  )
}
