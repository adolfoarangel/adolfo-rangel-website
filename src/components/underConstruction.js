import React from "react"
import styled from "styled-components"
import SocailMediaIcons from "./socialMediaIcons"

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20vh;
`

export default props => (
  <Container>
    <h1>UNDER CONSTRUCTION!!</h1>
    <p>
      I'm still currently working on this pages so stay tuned to see how they
      come out
    </p>
    <SocailMediaIcons />
  </Container>
)
