import React, { Fragment } from 'react';
import Footer from './../../footer/footer';
import RecipeCard from './../../RecipeCard/RecipeCard';
import { Container,Button,Form,Input,Row,Col } from 'reactstrap';
import NavBar from './../../NavBar/NavBar';
import receipebg from './receipesbg.jpg';
import classes from './AllRecipes.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const AllRecipesPage = () => {
    const [allrecipeKeys, setRecipeKeys] = React.useState(null);
    let [allrecipeJson, setRecipeJson] = React.useState(null);
    const [allrecipeJsonlength , setallrecipeJsonlength ] = React.useState(0);
    let counter = 0
    // const [ rowCountArray , setRowCountArray ] = React.useState([]);
    const updateAfterSearch = () =>{
        const namerep = document.getElementById('search').value;
        const listrecip = []
        if(namerep in allrecipeJson){
            console.log("Hello")
        }
    }
    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.database();
            let data = await db.ref("recipes").once('value');
            data=data.val();
            setRecipeJson(data);
            const reciparr=Object.keys(data);
            // [[data['user1rep'],data['user2rep'],data['user3rep']],[data['user4rep'],data['user5rep'],data['user6rep']]];
            setRecipeKeys(reciparr)
            setallrecipeJsonlength(reciparr.length);
            // setRowCountArray(Array(Math.ceil(allrecipeJsonlength/3)).fill(0));
            // for(let i=0;i<temp.length;i++){
            //     temp[i]=i;
            // }
            // console.log(temp)
            
        }
        fetchData();
    }, [allrecipeJsonlength])


    return(
        <Fragment>
            <NavBar/>
            <div className={classes.bm}>
                <img className={classes.ig} src={receipebg} alt="Recipesbg" />
                <Container>
                    <div className={classes.centered}><p>Recipes</p></div>
                </Container>
            </div>
            <Form>
                <Container className={classes.featured}>
                    <Input className={classes.textbox} id="search" type="text" placeholder="Search Recipes here" />
                    <Button onClick={updateAfterSearch} color="warning" className={classes.buttons}> Search </Button>
                </Container>
            </Form>
            <Container className={classes.gridTopMargin}>
                <h4 className={[classes.whiteText,classes.featured].join(' ')}>All Recipes</h4>
                <div className={classes.bottomMargin}> 
                    {Array(Math.ceil(allrecipeJsonlength/3)).fill(0).map((itemi)=>{
                        return (
                            <Row key={itemi}>
                                {[0,1,2].map((itemj)=>{
                                    return (
                                        <Col key={itemi+itemj} 
                                            xs="12" 
                                            md="4" >
                                                { allrecipeJson ? <RecipeCard recipedata={allrecipeJson[allrecipeKeys[counter]]}/> : <RecipeCard recipedata={null}/> }
                                                {counter += 1}
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })}
                </div>
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default AllRecipesPage