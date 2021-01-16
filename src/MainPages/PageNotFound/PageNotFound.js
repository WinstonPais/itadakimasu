import React from 'react';
import plate from './plate.svg';
import classes from './PageNotFound.module.css';
import { Button } from 'reactstrap';

const PageNotFound = () => {

    React.useEffect(() => {
        document.getElementById('root').style.height = '100%';
        document.body.style.height = '100%';
    },[])

    return (
        <div id="bgplate" className={classes.bg}>
            <div className={ classes.tiltedbackground }></div>
            <div className={ classes.maincontainer }>
                <div style={{position:'relative',top:'32%'}}>
                    <div className={ classes.center }>
                        <h1 className={ classes.head404 } >4<img className={ classes.plate } src={ plate } alt="Plate" />4</h1>
                    </div>
                    <div className={ classes.center }>
                        <h4>Opps! Looks Like Nothing Is Here</h4>
                    </div>
                    <div className={ classes.center }>
                        <Button color="warning">Take Me Home</Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PageNotFound
