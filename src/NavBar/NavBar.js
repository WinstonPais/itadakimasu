import React, { useState,Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
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
        <a className={"navbar-brand "+classes.anchorParent} href="#">
            <img src={NavBarLogo} width="70" height="70" className={"d-inline-block align-top "+ classes.imageMargin} alt=""/>
            <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={"ml-auto "+classes.MainNav} navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem>
                <Button className={classes.buttonLogin} color="warning">Login</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Fragment>
        // <nav className={"navbar sticky-top navbar-expand-lg "+classes.navbarcustom}>
            // <a className={"navbar-brand "+classes.anchorParent} href="#">
            //     <img src={NavBarLogo} width="70" height="70" className={"d-inline-block align-top "+ classes.imageMargin} alt=""/>
            //     <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
            // </a>

        //     <button className={"navbar-toggler "+classes.navbuttoncolor} 
        //             type="button" 
        //             data-toggle="collapse" 
        //             data-target="#navbarText" 
        //             aria-controls="navbarText" 
        //             aria-expanded="false" 
        //             aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"/>
        //     </button>

            
        //     <div className="collapse navbar-collapse" id="navbarText">
        //         <div className="navbar-nav ml-auto">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //                 </li>
        //                 <li className="nav-item">
        //                 <a className="nav-link" href="#">About</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar;