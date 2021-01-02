import React, { Component} from 'react';
import { Container } from 'reactstrap';
import createbg from './createbg.png';
import classes from './createRecipes.module.css';

class CreateRecipes extends Component {
    render(){
        return(
            <div className={classes.bm}>
                <img className={classes.ig} src={createbg} alt="CreateRecipesbg" />
                <Container>
                    <div className={classes.centered}><p>Create your Perfect</p><p>Recipes and Dishes</p></div>
                </Container>
            </div>
        )
    }
}

export default CreateRecipes;