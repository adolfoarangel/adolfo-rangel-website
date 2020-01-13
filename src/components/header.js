import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`

const StyledSubHeader = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

const StyledBlogHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const StyledBlogDescription = styled.h2`
  font-size: 1.75rem;
  font-weight: 200;
  color: lightgrey;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Header = props => (
  <>
    <StyledHeader>{props.headerText}</StyledHeader>
  </>
)

const SubHeader = props => (
  <>
    <StyledSubHeader>{props.headerText}</StyledSubHeader>
  </>
)

const BlogHeader = props => (
  <>
    <StyledBlogHeader>{props.headerText}</StyledBlogHeader>
  </>
)

const BlogDescription = props => (
  <>
    <StyledBlogDescription>{props.headerText}</StyledBlogDescription>
  </>
)

export { Header, SubHeader, BlogHeader, BlogDescription }
