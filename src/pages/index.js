import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 10vh 0vh;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const Paragraph = styled.p`
  font-size: 1.2rem;
`

const Button = styled(Link)`
  background: ${props => props.theme.secondaryColor};
  border-radius: 10px;
  padding: 10px;
  text-decoration: none;
  color: white;
`

const Select = styled.select`
  background-color: white;
  border: 0;
  border-bottom: 2px solid black;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.15em;
  border-radius: 0;
  max-height: 50%;
  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: 768px) {
    max-width: 50vw;
    margin: auto;
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

const VerticalContainer = styled.div`
  display: flex;
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
        <Header headerText="Hi, I'm Software Developer interested in everything web related." />
      </Hero>
      <HorizontalContainer>
        <VerticalContainer>
          <h2
            style={{
              marginRight: "1.5rem",
              fontSize: "2rem",
              fontFamily: "Cutive Mono, monospace",
              textAlign: "center",
            }}
          >
            Tech I've used{" "}
          </h2>
          <Select
            value={techExperience}
            onChange={e => setTechExperience(e.target.value)}
          >
            <option value="PRO">Professional</option>
            <option value="FUN">For Fun</option>
          </Select>
        </VerticalContainer>
      </HorizontalContainer>
      <HorizontalContainer>
        {techExperience === "PRO" ? (
          <div>
            <h3>// Frameworks & Languages</h3>
            <h4>Spring Boot & MVC (Java)</h4>
            <h4>Angular (JavaScript & TypeScript)</h4>
            <h4>SCSS & CSS</h4>
            <h3>// Database</h3>
            <h4>SQL SERVER</h4>
            <h4>PL SQL</h4>
          </div>
        ) : (
          <div>
            <h3>// Frameworks & Languages</h3>
            <h4>Node (JavaScript & TypeScript)</h4>
            <h4>React (JavaScript & TypeScript)</h4>
            <h4>React Native (JavaScript)</h4>
            <h3>// Database</h3>
            <h4>Mongoose</h4>
          </div>
        )}
      </HorizontalContainer>
    </Layout>
  )
}
