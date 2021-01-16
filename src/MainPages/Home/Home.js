import React, { Fragment } from 'react';
import Footer from './../../footer/footer';
import classes from './Home.module.css';
import HomeCarousel from './../../homecarousel/homecarousel';
import Grid from './../../Grid/Grid';
import { Container } from 'reactstrap';
import CreateRecipes from './../../createRecipes/createRecipes';

const Home = () => {
    return (
        <Fragment>
            <HomeCarousel/>
            <div className={classes.makePositionRelative}>
            <Container className={classes.gridTopMargin}>
                <h4 className={[classes.whiteText,classes.featured].join(' ')}>&nbsp;&nbsp;Featured &nbsp;&nbsp;</h4>
                <Grid/>
            </Container>
            <CreateRecipes />
            <Footer />
            </div>
        </Fragment>
    )
}

export default Home
