import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import SvgLogo from "./svgLogo"

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
  width: 96vw;
  top: 0;
  z-index: 3;
  height: 10vh;
`

const FullScreenMenu = styled.div`
  display: ${props => (props.trigger ? "flex" : "none")};
  background-color: ${props => props.theme.backgroundColor};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const RoutingLink = styled(Link)`
  font-size: 32px;
  text-shadow: none;
  background-image: none;
  text-decoration: none;
`

const MenuIcon = styled(FaBars)`
  display: inline;
  height: 30px;
`

const CloseIcon = styled(FaTimes)`
  height: 30px;
  display: inline;
`

const ListLinkUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
`

const ListLinkLi = styled.li`
  display: inline-block;
  text-align: center;
  margin-top: 10vh;
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
    <>
      <NavBar>
        <RoutingLink to="/">
          <SvgLogo />
        </RoutingLink>

        {toggleMenu ? (
          <CloseIcon size={25} onClick={() => setToggleMenu(!toggleMenu)} />
        ) : (
          <MenuIcon size={25} onClick={() => setToggleMenu(!toggleMenu)} />
        )}
      </NavBar>
      <FullScreenMenu trigger={toggleMenu}>
        <ListLinkUl>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/recommendations/">Recommendations</ListLink>
        </ListLinkUl>
      </FullScreenMenu>
    </>
  )
}
