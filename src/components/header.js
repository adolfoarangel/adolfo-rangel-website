import React from "react"
import styled from "styled-components"

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`
export default props => <>
  <Header>{props.headerText}</Header>
</>
