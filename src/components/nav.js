import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = styled.h3`
  display: inline;
  font-size: 1.5rem;
`

const RoutingLink = styled(Link)`
  text-shadow: none;
  background-image: none;
  text-decoration: none;
`

const ListLinkUl = styled.ul`
  display: flex;
  list-style-type: none;
`

const ListLinkLi = styled.li`
  display: inline-block;
  margin: 14px 16px;
`

const ListLink = props => (
  <ListLinkLi>
    <RoutingLink to={props.to} activeStyle={{ color: "white" }}>
      {props.children}
    </RoutingLink>
  </ListLinkLi>
)

export default () => (
  <NavBar>
    <RoutingLink to="/">
      <Header>Adolfo Rangel</Header>
    </RoutingLink>
    <ListLinkUl>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/now/">Now</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="/recommendations/">Recommendations</ListLink>
    </ListLinkUl>
  </NavBar>
)
