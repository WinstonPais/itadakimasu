import React, { Fragment } from 'react';
import { Container,Form, FormGroup,FormText,Button, Label, Input } from 'reactstrap';
import Footer from './../../footer/footer';
import NavBar from './../../NavBar/NavBar';
import classes from './MakeRecipePage.module.css';
import createbg from './makerecipes.png';
import Ingredients from './Ingredients';

const MakeRecipesPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className={classes.bm}>
                    <img className={classes.ig} src={createbg} alt="MakeRecipesbg" />
                    <Container>
                        <div className={classes.centered}><p>Create your Perfect</p><p>Recipes and Dishes</p></div>
                    </Container>
            </div>
            <Container className={classes.form1}>
                <Form>
                <FormGroup className={classes.title}>
                    <Label for="title"><h1>Title</h1></Label>
                    <Input type="text" name="title" id="title" placeholder="Enter the Title" />
                </FormGroup>
                <FormGroup className={classes.description}>
                    <Label for="description"><h1>Description</h1></Label>
                    <Input type="textarea" name="description" id="description" placeholder="Enter the Description" />
                </FormGroup>
                <FormGroup >
                    <Label className={classes.Ingredients} for="Ingredients"><h1>Ingredient</h1></Label>
                    <Button className={classes.addIng} color="warning">Add Ingredient</Button>
                    <Ingredients/>
                </FormGroup>
                <FormGroup className={classes.file1}>
                    <Label for="exampleFile"><h1>Image</h1></Label>
                    <Input type="file" name="file" id="exampleFile" />
                </FormGroup>
                <FormGroup className={classes.radio} tag="fieldset">
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Veg
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Non-Veg
                    </Label>
                    </FormGroup>
                </FormGroup>
                <Button className={classes.submit} color="warning">Submit</Button>
                </Form>
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default MakeRecipesPage;