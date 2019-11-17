import React from "react"
import styled from "styled-components"

const Header = styled.h1`
  font-size: 2rem;
`
export default props => <Header>{props.headerText}</Header>
