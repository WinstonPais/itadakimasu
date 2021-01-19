import React, { Fragment, useContext } from 'react';
import { Container,Form, FormGroup,Button, Label, Input } from 'reactstrap';
import { UserContext } from './../../contexts/UserProvider';
import Footer from './../../footer/footer';
import NavBar from './../../NavBar/NavBar';
import classes from './MakeRecipePage.module.css';
import createbg from './makerecipes.png';
// import Ingredients from './Ingredients';
import firebase from 'firebase/app';
import 'firebase/database';

const MakeRecipesPage = () => {
    const user = useContext(UserContext);

    // const AddIngredientTextFeilds = () => {
        
    // }
    
    const addRecipeToFireBase = async () => {
        const name = document.getElementById('title').value;
        const desc = document.getElementById('description').value;
        // const name = document.getElementById('title').value;
        // console.log()
        // const name = document.getElementById('exampleFile');

        const rId = "asgsehsdg"+user.uid
        await firebase.database().ref('recipes/' + rId ).set({
            CookTime: document.getElementById('cookingTime').value,
            Name: name,
            PrepTime: document.getElementById('PrepTime').value,
            Servings: document.getElementById('Serving').value,
            authorId: user.uid,
            coverimg:"https://firebasestorage.googleapis.com/v0/b/itadakimasu-development.appspot.com/o/Recepies%2Fchicken-lollipop-recipe10-compressed.jpg?alt=media&token=a2997024-4fb8-42c2-bb6a-9f1f1328444c",
            description:desc,
            ingredients:{
                "Chicken legs":"500g","Cornflour":"4 tbsp","Oil":"500 ml","Chilli Powder":"4 tbsp","Eggs":"1 nos"
            },
            ratingsreceived: 10,
            totalratings: 42,
            type: 'NonVeg'

        });
        window.location.href = '/recipes/'+rId;
    }

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
                <FormGroup className={classes.title}>
                    <Label for="title"><h1>Cooking time</h1></Label>
                    <Input type="text" name="title" id="cookingTime" placeholder="Enter the Cooking Time" />
                </FormGroup>
                <FormGroup className={classes.title}>
                    <Label for="title"><h1>Preparation time</h1></Label>
                    <Input type="text" name="title" id="PrepTime" placeholder="Enter the Preparation Time" />
                </FormGroup>
                <FormGroup className={classes.title}>
                    <Label for="title"><h1>Servings</h1></Label>
                    <Input type="text" name="title" id="Serving" placeholder="Servings" />
                </FormGroup>
                {/* <FormGroup >
                    <Label className={classes.Ingredients} for="Ingredients"><h1>Ingredient</h1></Label>
                    <Button onClick={AddIngredientTextFeilds} className={classes.addIng} color="warning">Add Ingredient</Button>
                    <Ingredients/>
                </FormGroup> */}
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
                <Button className={classes.submit} onClick={addRecipeToFireBase} color="warning">Submit</Button>
                </Form>
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default MakeRecipesPage;