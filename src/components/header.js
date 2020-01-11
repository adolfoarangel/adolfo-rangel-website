import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ParentLinkStyle = styled(Link)`
  text-decoration: none;
`

const StyledHeader = styled.h1`
  font-size: 2.0rem;
  font-weight: 600;
`

const StyledSubHeader = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

const HeaderContainer = styled.div`
  display: flex; 
  align-items: center;
`

const ParentSpan = styled.span`
  font-size: 32px; 
  margin-right: 10px;
`

const ChildSpan = styled.span`
  font-size: 28px; 
  text-decoration: underline;
  color: #14ffec;
`

const Header = props => <>
  <StyledHeader>{props.headerText}</StyledHeader>
</>

const SubHeader = props => <>
  <StyledSubHeader>{props.headerText}</StyledSubHeader>
</>

const BlogHeader = props => <HeaderContainer>
  <ParentLinkStyle to={props.parentRoute}><ParentSpan>{props.parentText} ></ParentSpan></ParentLinkStyle>
  <ChildSpan>{props.childText}</ChildSpan>
</HeaderContainer>


export {Header, SubHeader, BlogHeader};