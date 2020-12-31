import React, { useState,Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
import NavBarLogo from './NavBarLogo.png';
import classes from './NavBar.module.css';

const NavBar = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavBar] = useState(false);

    const changeBackground = () =>{
        if (window.scrollY >= 80) {
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Fragment>
      <Navbar sticky="top" className={navbar ? [classes.navbarcustom,classes.navbarActive].join(' ') : classes.navbarcustom} dark expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <a className={"navbar-brand "+classes.anchorParent} href="https://www.google.com/">
            <img src={NavBarLogo} width="70" height="70" className={"d-inline-block align-top "+ classes.imageMargin} alt=""/>
            <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={"ml-auto "+classes.MainNav} navbar>
            <NavItem>
              <NavLink href="https://www.google.com/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com/">Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com/">Contact</NavLink>
            </NavItem>
            <NavItem>
                <Button className={classes.buttonLogin} color="warning">Login</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Fragment>
    )
}

export default NavBar;