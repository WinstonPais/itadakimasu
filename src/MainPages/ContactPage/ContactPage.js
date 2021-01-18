import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import classes from './ContactPage.module.css';
import Footer from './../../footer/footer';

const ContactPage = () => {
    return (
        <>
        <Container style={{position:'relative',marginTop:'20vh'}}>
            <Row className={classes.myRow}>
                <Col style={{backgroundColor: 'rgb(39, 209, 221)'}} className={classes.myCol}>
                    <a href="https://github.com/WinstonPais/itadakimasu/issues">
                        <div className={classes.cc} style={{height:'100%'}}>
                            <div>
                                <img alt="asg" style={{height:'200px',width:'200px'}} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
                                <h3>Click Here to Report Issues</h3>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col style={{backgroundColor: 'rgb(32, 30, 30)'}} className={classes.myCol}>
                    <div className={classes.cc} style={{height:'100%'}}>
                    <h3 syle={{color:'white'}}>Contact Us</h3>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        <div style={{marginTop:'20vh'}}>
        <Footer/>
        </div> 
        </>
    )
}

export default ContactPage
