import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import RecipeCard from './../RecipeCard/RecipeCard';
import classes from './Grid.module.css';

const Grid = (props) => {
    return(
        <Fragment>
            {[1,2].map((itemi)=>{
                return (
                    <Row key={itemi} className={classes.rowMargin}>
                        {[1,2,3].map((itemj)=>{
                            return (
                                <Col key={itemi+itemj} 
                                    xs="12" 
                                    sm="6" 
                                    md="4" >
                                        <RecipeCard />
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </Fragment>
    );
}

export default Grid;