import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import classes from './ContactPage.module.css';
import Footer from './../../footer/footer';

const ContactPage = () => {
    return (
        <>
        <Container className={classes.mycont} style={{position:'relative',marginTop:'25vh',}}>
            <Row className={classes.myRow}>
                <Col style={{backgroundColor: 'rgb(39, 209, 221)'}} className={classes.myCol}>
<<<<<<< Updated upstream
                    <a onClick={()=> window.open("https://github.com/WinstonPais/itadakimasu/issues","_blank")} >
                        <div className={classes.center} style={{height:'100%'}}>
                            <div>
=======
                    <a href="https://github.com/WinstonPais/itadakimasu/issues">
                        <div className={classes.cc} style={{height:'100%'}}>
                            <div style={{height:'100%'}}>
>>>>>>> Stashed changes
                                <img alt="asg" style={{height:'200px',width:'200px'}} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
                                <h3>Click Here to Report Issues</h3>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col style={{backgroundColor: 'rgb(32, 30, 30)'}} className={classes.myCol}>
                    <div className={classes.center} style={{height:'100%',margin:"auto",textAlign:"center",verticalAlign: 'middle'}}>
                        <h1 style={{color:'white'}}>Contact Us</h1>
                        <a href="mailto:wiltondsouza100@gmail.com">Send email</a>
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
