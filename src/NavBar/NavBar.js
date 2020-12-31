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
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './../firebase.config';

const NavBar = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavBar] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);

    console.log(firebaseConfig);
    const logMeIn = () => {

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          // var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          setIsUserAuth(true);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
          alert(errorMessage);
          console.log(errorCode);
        });
    }

    const logMeOut = () => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        setIsUserAuth(false);
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);

      });
    }

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

    const loginButton = <Button className={classes.buttonLogin} onClick={logMeIn} color="warning">Login</Button>;
    const LogoutButton = <Button className={classes.buttonLogin} onClick={logMeOut} color="warning">LogOut</Button>;
    
    return(
        <Fragment>
      <Navbar fixed="top" className={navbar ? [classes.navbarcustom,classes.navbarActive].join(' ') : classes.navbarcustom} dark expand="md">
        <a className={"navbar-brand "+classes.anchorParent} href="https://winstonpais.github.io/itadakimasu/">
            <img src={NavBarLogo} width="70" height="70" className={"d-inline-block align-top "+ classes.imageMargin} alt=""/>
            <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={"ml-auto "+classes.MainNav} navbar>
            <NavItem>
              <NavLink className={classes.linktextColor} href="https://winstonpais.github.io/itadakimasu/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.linktextColor} href="https://winstonpais.github.io/itadakimasu/">Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classes.linktextColor} href="https://winstonpais.github.io/itadakimasu/">Contact</NavLink>
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