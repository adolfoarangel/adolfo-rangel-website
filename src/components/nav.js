import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import SvgLogo from "./svgLogo"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  position: relative;

  @media (max-width: 768px) {
    height: 50px;
    margin-top: 0px;
  }
`

const RoutingLink = styled(Link)`
  text-shadow: none;
  background-image: none;
  text-decoration: none;
`

const MenuIcon = styled(FaBars)`
  display: none;
  height: 30px;

  @media (max-width: 768px) {
    display: inline;
  }
`
const CloseIcon = styled(FaTimes)`
  display: none;
  height: 30px;

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
    margin: 0;
    padding: 0;
    background-color: #000;
  }
`

const ListLinkLi = styled.li`
  display: inline-block;
  margin: 14px 16px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 16px;
  }
`

const ListLink = props => (
  <ListLinkLi>
    <RoutingLink
      to={props.to}
      activeStyle={{
        color: "white",
        borderBottom: "2px solid white",
      }}
    >
      {props.children}
    </RoutingLink>
  </ListLinkLi>
)

export default () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <NavBar>
      <RoutingLink to="/">
        <SvgLogo />
      </RoutingLink>

      {toggleMenu ? (
        <CloseIcon size={25} onClick={() => setToggleMenu(!toggleMenu)} />
      ) : (
        <MenuIcon size={25} onClick={() => setToggleMenu(!toggleMenu)} />
      )}

      <ListLinkUl trigger={toggleMenu}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/recommendations/">Recommendations</ListLink>
      </ListLinkUl>
    </NavBar>
  )
}
