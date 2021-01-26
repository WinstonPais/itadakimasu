import React from 'react';
import { Row,Col,Form, FormGroup, Input } from 'reactstrap';
// import classes from './Ingredients.module.css';

const Ingredients = (props) => {
    return(
        <Form >
            <FormGroup>
            <Row >
                <Col md="5">
                <Input type="text" name="Ingredient" placeholder="Enter the Ingredient" />
                </Col>
                <Col md="3">
                <Input type="text" name="Quantity"  placeholder="Enter the Qunatity" />
                </Col>
                <Col md="3">
                <Input type="text" name="Unit" placeholder="Enter the Unit" />
                </Col>
                <Col md="1">
                </Col>
            </Row>
            </FormGroup>
        </Form>
        
    )
}

export default Ingredients