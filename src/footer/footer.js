import React from 'react';
import "./footer.module.css";
import classes from './footer.module.css';
import logo from './logo.png';
import pizza from './pizza.jpg';
import burger from './burger.jpeg';
import roll from './roll.jpg';
import beef from './beef.jpeg';
import sushi from './sushi.jpg';
import noodles from './noodles.jpg';

const Footer = () => {
    return(
        <div className={classes.contain}>
            <div className="row">
                    <img src={pizza} alt="" />
                    <img src={burger} alt="" />
                    <img src={roll} alt="" />
                    <img src={beef} alt="" />
                    <img src={sushi} alt="" />
                    <img src={noodles} alt="" />
            </div>
            <div className={classes.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-offset-1">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-sm-2">
                            <h3 className={classes.text1}>Itadakimasu</h3>
                        </div>
                        <div className="col-sm">
                            <span className={classes.text2}>Copyright ©2020 All rights reserved by Winston, Wilton and Vinsten</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
