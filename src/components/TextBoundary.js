import React from "react"
import styled from "styled-components"

const TextContainer = styled.div`
  max-width: 1024px; 
  margin: 0 auto;
`

export default ({ children }) => (
  <TextContainer>
    {children}
  </TextContainer>
)
