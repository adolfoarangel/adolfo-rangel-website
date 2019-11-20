import React from "react"
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

export default () => (
  <Layout>
    <Hero>
      <Header headerText="Hi, I'm Software Developer intrested in everything web related." />
      <div>
        <Paragraph>
          During the day I'm a Software Engineer working mainly on Spring and
          Angular for Westgate Resorts, But at night I work all types of things.
        </Paragraph>
        <Button to="/about/">Read More</Button>
      </div>
    </Hero>
  </Layout>
)
