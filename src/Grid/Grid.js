import React from 'react';
import { Row, Col } from 'reactstrap';
import RecipeCard from './../RecipeCard/RecipeCard';
import classes from './Grid.module.css';

const Grid = (props) => {
    return(
        <div className={classes.bottomMargin}> 
            {[1,2].map((itemi)=>{
                return (
                    <Row key={itemi}>
                        {[1,2,3].map((itemj)=>{
                            return (
                                <Col key={itemi+itemj} 
                                    xs="12" 
                                    md="4" >
                                        <RecipeCard />
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