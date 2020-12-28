import React from 'react';
import NavBarLogo from './NavBarLogo.png';
import classes from './NavBar.module.css';

const NavBar = ( props ) => {
    return(
        <nav className={"navbar navbar-default navbar-inverse navbar-fixed-top navbar-expand-lg "+[classes.navbarcustom].join(' ')}>
            <div className="container-fluid">
            {/* <div className="navbar-header">

            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarText" aria-expanded="false">

            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button> */}
                
            <a className={"navbar-brand "+classes.anchorParent} href="#">
                    <img src={NavBarLogo} width="70" height="70" className={"d-inline-block align-top "+ [classes.imageMargin].join(' ')} alt=""/>
                    <span className={[classes.anchorChildren,classes.anchorspan].join(' ')}>Itadakimasu</span>
                </a>

            {/* </div> */}


            
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;