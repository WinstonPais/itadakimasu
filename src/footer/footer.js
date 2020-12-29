import React, { Component } from 'react';
import classes from './footer.module.css';
import logo from './logo.png';
import Imageslist from './images/images';

class Footer extends Component {
    render() {
        return(
            <div>
                <Imageslist />
                <div className={classes.footer}>
                    <div className="container">
                        <div className="row">
                            <div className="col-offset-1">
                                <img src={logo} />
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
}

export default Footer;