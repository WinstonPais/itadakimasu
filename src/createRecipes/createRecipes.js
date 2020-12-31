import React, { Component, Fragment } from 'react';
import { Row,Container } from 'reactstrap';
import createbg from './createbg.png';
import classes from './createRecipes.module.css';

class CreateRecipes extends Component {
    render(){
        return(
            <div className={classes.bm}>
            {/* // <Row className={classes.bm}>
                //  <Container className={[classes.container1,classes.bm].join(' ')}> */}
                    <img className={classes.ig} src={createbg} alt="CreateRecipesbg" />
                    <Container>
                        <div className={classes.centered}><p>Create your Perfect</p><p>Recipes and Dishes</p></div>
                    </Container>
                {/* // </Container>
            // </Row> */}
            </div>
        )
    }
}

export default CreateRecipes;