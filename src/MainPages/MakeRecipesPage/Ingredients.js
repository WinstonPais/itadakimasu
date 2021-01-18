import React, { Fragment } from 'react';
import { Row,Col,Container,Form, FormGroup,FormText,Button, Label, Input } from 'reactstrap';
import classes from './Ingredients.module.css';

const Ingredients = () => {
    return(
        <Form className={classes.form2}>
            <FormGroup>
            <Row className={classes.form2}>
                <Col>
                <Input type="text" className={classes.text1} name="Ingredient" id="Ingredient" placeholder="Enter the Ingredient" />
                </Col>
                <Col>
                <Input type="text" className={classes.text2} name="Quantity" id="Quantity" placeholder="Enter the Qunatity" />
                </Col>
                <Col>
                <Input type="text" className={classes.text3} name="Unit" id="Unit" placeholder="Enter the Unit" />
                </Col>
            </Row>
            </FormGroup>
        </Form>
        
    )
}

export default Ingredients