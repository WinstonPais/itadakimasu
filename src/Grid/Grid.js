import React from 'react';
import { Row, Col } from 'reactstrap';
import RecipeCard from './../RecipeCard/RecipeCard';
import classes from './Grid.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const Grid = (props) => {

    const [recipeJson, setRecipeJson] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.database();
            const data = await db.ref("recipes/user1rep").once('value');
            console.log("----------------");
            console.log(data.val());
            console.log("----------------");
            setRecipeJson(data.val())
        }
        fetchData();
    }, [])

    return(
        <div className={classes.bottomMargin}> 
            {[0,1].map((itemi)=>{
                return (
                    <Row key={itemi}>
                        {[0,1,2].map((itemj)=>{
                            return (
                                <Col key={itemi+itemj} 
                                    xs="12" 
                                    md="4" >
                                        <RecipeCard recipedata={recipeJson}/>
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    );
}

export default Grid;