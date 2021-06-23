import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #db3eb1;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #db3eb1;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="#home">Home</NavItem>
      <NavItem to="#aboutme">Über mich</NavItem>
      <NavItem to="#work">Work</NavItem>
      <NavItem to="#tools">Tools</NavItem>
      <NavItem href="mailto:lennart@lennartkrellenberg.com">Contact</NavItem>




    </>
  )
}

export default NavbarLinks