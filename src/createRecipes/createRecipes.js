import React, { Component } from 'react';
import { Row,Container } from 'reactstrap';
import createbg from './createbg.png';
import classes from './createRecipes.module.css';

class CreateRecipes extends Component {
    render(){
        return(
            <Row className={classes.bm}>
                 <Container className={classes.container1}>
                    <img className={classes.ig} src={createbg} alt="CreateRecipesbg" />
                    <div className={classes.centered}><p>Create your Perfect</p><p>Recipes and Dishes</p></div>
                </Container>
            </Row>
        )
    }
}

export default CreateRecipes;