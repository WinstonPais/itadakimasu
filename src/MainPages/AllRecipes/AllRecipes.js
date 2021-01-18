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
    let [allrecipeKeys, setRecipeKeys] = React.useState(null);
    let [allrecipeJson, setRecipeJson] = React.useState(null);
    const [allrecipeJsonlength , setallrecipeJsonlength ] = React.useState(0);
    const [didInitializeOnce,setDidInitializeOnce] = React.useState(false);
    let counter = 0
    const updateAfterSearch = () =>{
        const namerep = document.getElementById('search').value;
        setRecipeKeys(() => {
            let temp = []
            Object.keys(allrecipeJson).forEach((recipeIdT)=>{
                if(allrecipeJson[recipeIdT]['Name'].toLowerCase().includes(namerep.toLowerCase())){
                    // console.log(allrecipeJson[recipeIdT]['Name'])
                    // console.log(recipeIdT)
                    temp.push(recipeIdT)
                }
            })
            setallrecipeJsonlength(temp.length)
            return temp
        })
        
        
    }
    React.useEffect(() => {
        const fetchData = async () => {
            if(!didInitializeOnce){
                const db = firebase.database();
                let data = await db.ref("recipes").once('value');
                data=data.val();
                setRecipeJson(data);
                const reciparr=Object.keys(data);
                setRecipeKeys(reciparr)
                setallrecipeJsonlength(reciparr.length);
            }
            console.log(allrecipeKeys)
            
            setDidInitializeOnce(true)
            
        }
        fetchData();
    }, [allrecipeJsonlength,allrecipeKeys,didInitializeOnce])

    const RenderCard = () => {
        // console.log("came Here")
        counter +=1 
        if (allrecipeJson){
            if (counter<=allrecipeJsonlength){
                return <RecipeCard key={Date()} recipedata={allrecipeJson[allrecipeKeys[counter-1]]}/>
            }
            else{
                return null
            }
        }
        else{
            return <RecipeCard recipedata={null}/>
        }
    }


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
                                                {/* {console.log(counter)}
                                                {console.log(allrecipeJsonlength)} */}
                                                {RenderCard()}
                                                {/* { allrecipeJson && counter<allrecipeJsonlength ? <RecipeCard recipedata={allrecipeJson[allrecipeKeys[counter]]}/> : <RecipeCard recipedata={null}/>  } */}
                                                
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