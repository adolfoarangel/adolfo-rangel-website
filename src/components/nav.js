import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: relative;
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

const MenuIcon = styled(FaBars)`
  display: none;

  @media (max-width: 768px) {
    display: inline;
  }
`
const CloseIcon = styled(FaTimes)`
  display: none;

  @media (max-width: 768px) {
    display: inline;
  }
`

const ListLinkUl = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 768px) {
    display: ${props => (props.trigger ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    width: 100%;
    padding: 0;
    background-color: #000;
  }
`

const ListLinkLi = styled.li`
  display: inline-block;
  margin: 14px 16px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const ListLink = props => (
  <ListLinkLi>
    <RoutingLink to={props.to} activeStyle={{ color: "white" }}>
      {props.children}
    </RoutingLink>
  </ListLinkLi>
)

export default () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <NavBar>
      <RoutingLink to="/">
        <Header>Adolfo Rangel</Header>
      </RoutingLink>

      {toggleMenu ? (
        <CloseIcon onClick={() => setToggleMenu(!toggleMenu)} />
      ) : (
        <MenuIcon onClick={() => setToggleMenu(!toggleMenu)} />
      )}

      <ListLinkUl trigger={toggleMenu}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/now/">Now</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/recommendations/">Recommendations</ListLink>
      </ListLinkUl>
    </NavBar>
  )
}
