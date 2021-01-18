import React from 'react';
import { Row, Col } from 'reactstrap';
import RecipeCard from './../RecipeCard/RecipeCard';
import classes from './Grid.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const Grid = (props) => {

    let [allrecipeJson, setRecipeJson] = React.useState(null);
    let [featuredRecipeIds, setFeaturedRecipeIds] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.database();
            let data = await db.ref('recipes').limitToFirst(6).once('value');
            data=data.val();
            console.log(data);
            const reciparr=[
                [data['user1rep'],data['user2rep'],data['user3rep']],
                [data['user4rep'],data['user5rep'],data['user6rep']]
            ];
            setFeaturedRecipeIds([
                ['user1rep','user2rep','user3rep'],
                ['user4rep','user5rep','user6rep']
            ]);
            setRecipeJson(reciparr);
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
                                        { allrecipeJson ? <RecipeCard recipeId={featuredRecipeIds[itemi][itemj]} recipedata={allrecipeJson[itemi][itemj]}/> : <RecipeCard recipeId={null} recipedata={null}/> }
                                        
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