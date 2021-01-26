import React, { Fragment, useContext } from 'react';
import { Container, FormGroup,Button, Label, Input, Row, Col } from 'reactstrap';
import { UserContext } from './../../contexts/UserProvider';
import Footer from './../../footer/footer';
import classes from './MakeRecipePage.module.css';
import createbg from './makerecipes.png';
import { useHistory } from 'react-router';
import Ingredients from './Ingredients/Ingredients';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const MakeRecipesPage = () => {
    const user = useContext(UserContext);
    const [foodType,setFoodType] =  React.useState('NonVeg');
    const [imageAsFile, setImageAsFile] = React.useState('')
    const [numberOfIngredients, setNumberOfIngredients] = React.useState(1)
    const [ingredientRows, changeIngredientRows] = React.useState([])
    let history = useHistory();

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(image)
    }

    
    const setFType = (event) =>{
        setFoodType(event.target.value)
    }

    const getIngredientsJson = () =>{
        let resJson = {}
        const listOfForms = document.getElementById('ingredients').children;
        for(var i =0;i<listOfForms.length;i++){
            const temp = listOfForms[i].firstElementChild.firstElementChild.children;
            const key = temp[0].firstElementChild.value
            const value = temp[1].firstElementChild.value+" "+temp[2].firstElementChild.value
            resJson[key]=value;
        }
        return resJson;
    }

    const addRecipeToFireBase = async () => {

        const uploadTask = firebase.storage().ref(`/Recepies/${imageAsFile.name}`).put(imageAsFile)

        uploadTask.on('state_changed', 
            snapShot => {}, 
            error => {
                console.log(error);
            }, 
            () => {
                firebase
                .storage()
                .ref('Recepies')
                .child(imageAsFile.name)
                .getDownloadURL()
                .then(fireBaseUrl => {
                    const rId = Math.floor( Date.now() / 1000 )+user.uid  
                    firebase.database().ref('recipes/' + rId ).set({
                        CookTime: document.getElementById('cookingTime').value,
                        Name: document.getElementById('title').value,
                        PrepTime: document.getElementById('PrepTime').value,
                        Servings: document.getElementById('Serving').value,
                        authorId: user.uid,
                        coverimg: fireBaseUrl,
                        description: document.getElementById('description').value,
                        ingredients: getIngredientsJson(),
                        ratingsrecived: 10,
                        totalratings: 42,
                        type: foodType

                    });
                    history.push('/recipe/'+rId);
                })
            }
        )
        
        
    }

    function* times(x) {
        for (var i = 0; i < x; i++)
          yield i;
    }

    React.useEffect(() => {
        let ing = [...ingredientRows];
        if(ing.length < numberOfIngredients){
            changeIngredientRows(() => {
                for (let i of times(numberOfIngredients - ing.length)) {
                    const val = i+""+Math.floor( Date.now() / 100 )
                    ing.push(<Ingredients 
                    key={val} />);
                }
                
                return ing
            })
        }
        
    }, [numberOfIngredients,ingredientRows])

    const addIngredientRows = () =>{
        setNumberOfIngredients(numberOfIngredients+1)
    }

    return (
        <Fragment>
            <div className={classes.bm}>
                    <img className={classes.ig} src={createbg} alt="MakeRecipesbg" />
                    <Container>
                        <div className={classes.centered}><p>Create your Perfect</p><p>Recipes and Dishes</p></div>
                    </Container>
            </div>
            <Container className={classes.form1}>\
                <FormGroup style={{paddingLeft:'15px',paddingRight:'15px'}} className={classes.title}>
                    <Label for="title"><h1>Title</h1></Label>
                    <Input type="text" name="title" id="title" placeholder="Enter the Title" />
                </FormGroup>
                <FormGroup style={{paddingLeft:'15px',paddingRight:'15px'}} className={classes.description}>
                    <Label for="description"><h1>Description</h1></Label>
                    <Input type="textarea" style={{minHeight:'20vh'}} name="description" id="description" placeholder="Enter the Description" />
                </FormGroup>
                <Row className={classes.title}>
                    <Col>
                        <FormGroup>
                            <Label for="cookingTime"><h1>Cooking time</h1></Label>
                            <Input type="text" name="cookingTime" id="cookingTime" placeholder="Enter the Cooking Time" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="PrepTime"><h1>Preparation time</h1></Label>
                            <Input type="text" name="PrepTime" id="PrepTime" placeholder="Enter the Preparation Time" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={classes.title}>
                    <Col>
                        <FormGroup>
                            <Label for="Serving"><h1>Servings</h1></Label>
                            <Input type="text" name="Serving" id="Serving" placeholder="Servings" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup tag="fieldset">
                            <Label for="foodType"><h1>Food Type</h1></Label>
                            <FormGroup check>
                                <Label onChange={setFType.bind(this)} check>
                                    <Input type="radio" value="Veg" name="foodType" defaultChecked/>{' '}
                                    Veg <br />
                                    <Input type="radio" value="NonVeg" name="foodType" />{' '}
                                    Non-Veg
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup  style={{paddingLeft:'15px',paddingRight:'15px'}} className={classes.Ingredients} >
                    <Label for="Ingredients"><h1>Ingredients</h1></Label> <br />
                    <Button style={{margin:'1em',marginBottom:'2em'}} onClick={addIngredientRows} color="warning">Add Ingredient</Button>
                    <div id="ingredients">
                        {ingredientRows}
                    </div>
                </FormGroup>
                <FormGroup style={{paddingLeft:'15px',paddingRight:'15px',marginTop:'2em'}} className={classes.fileUpload}>
                    <Label for="exampleFile"><h1>Cover Image</h1></Label>
                    <Input onChange={handleImageAsFile} type="file" name="file" id="exampleFile" />
                </FormGroup>
                <div>
                    <Button className={classes.submit} onClick={addRecipeToFireBase} color="warning">
                        <strong>
                            Submit
                        </strong>
                    </Button>
                </div>
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default MakeRecipesPage;