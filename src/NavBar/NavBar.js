import React, { useEffect, useContext, useState, Fragment } from 'react';
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
import { signInWithGoogle, logOut } from "./../firebase.config";
import { UserContext } from '../contexts/UserProvider';
import firebase from 'firebase/app';
import 'firebase/database';
import { Link } from 'react-router-dom';

const NavBar = ( props ) => {
    const user = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavBar] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);

    // Login
    useEffect(() => {
      if (user) {
        setIsUserAuth(true);
        firebase.database().ref('users/' + user.uid).set({
          displayName: user.displayName, 
          email: user.email,
          profilePicture : user.photoURL
        });
      }
    }, [user])

    // LogOut
    useEffect(() => {
      if (!user) {
        setIsUserAuth(false);
      }
    }, [user]);

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

    const loginButton = <Button className={classes.buttonLogin} onClick={signInWithGoogle} color="warning">Login</Button>;
    const LogoutButton = <Button className={classes.buttonLogin} onClick={logOut} color="warning">LogOut</Button>;
    
    return(
      <Fragment>
        <Navbar fixed="top" className={navbar ? [classes.navbarcustom,classes.navbarActive].join(' ') : classes.navbarcustom} dark expand="md">
          <Link className={"navbar-brand "+classes.anchorParent} to="/itadakimasu">
              <img src={NavBarLogo} width="90vw" height="90vh" className={"d-inline-block align-top "+ classes.imageMargin} alt=""/>
              <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className={"ml-auto "+classes.MainNav} navbar>
              <NavItem>
                <NavLink className={classes.linktextColor} href="/itadakimasu">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classes.linktextColor} href="/allrecipes">Recipes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classes.linktextColor} href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                  { isUserAuth ? LogoutButton : loginButton }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
}

export default NavBar;