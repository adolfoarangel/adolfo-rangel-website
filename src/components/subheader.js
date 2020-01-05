import React from "react"
import styled from "styled-components"

const SubHeader = styled.h2`
  font-size: 1.3rem;
  font-weight: 200;
  margin-top: 0;
`
export default props => <SubHeader>{props.headerText}</SubHeader>
