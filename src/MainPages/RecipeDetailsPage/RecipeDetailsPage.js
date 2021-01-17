import React from 'react';
import RecipePageCoverImg from './../../RecipePageCoverImg/RecipePageCoverImg';
import StarRating from './../../RecipeCard/StarRating/StarRating';
import Footer from './../../footer/footer';
import CommentsMain from './../../CommentsMain/CommentsMain';
import { Row, Col, Container } from 'reactstrap';
import classes from './RecipeDetailsPage.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const RecipeDetailsPage = (props) => {

    const [rating,setRatings] = React.useState(1.5);
    const [authorName,setAuthorName] = React.useState('Illuminati');
    const [authorPicture,setAuthorPicture] = React.useState('https://lh3.googleusercontent.com/proxy/SQF2DRZjihxzJg1Of2J7fXQyVuP_K2RYrKu4ChCmfYP3rafhH_mf_rgYSc0YcOqmrS-YNabBGsqiyzBSHjHan2HzwxqUM1u3CrJDjndbkLI2bPJxjO6Sia4U2D4IN3wRMWCcj9Wi');
    
    React.useEffect(() => {
        const fetchData = async () => {
            if(props.recipeId){
                const db = firebase.database();
                let data = await db.ref("recipes/"+props.recipeId).once('value');
                data=data.val();
                if(data){
                    setRatings(data['Name']);
                }
                data = await db.ref("users/"+data['authorId']).once('value');
                if(data){
                    setAuthorName(data['displayName']);
                    setAuthorPicture(data['profilePicture']);
                }
            }
        }
        fetchData();
    }, [props.recipeId])

    return (
        <div style={{position:'relative',color:'white'}}>
            <RecipePageCoverImg/>
            <div style={{marginLeft:'10vw',marginRight:'10vw'}}>
                <Row style={{marginTop:'1em',marginBottom:'2em',marginRight:'1em',marginLeft:'1em'}}>
                    <Col xs="12" sm="6" md="3" style={{position:'relative'}}>
                        <h1>Eggs Benedict</h1>
                        <h2 className={ classes.makeinline }>{rating}</h2>
                        <div className={ classes.makeinline } style={{marginLeft:'2em'}}>
                        <StarRating stars={Math.floor(rating)}/>
                        </div>
                    </Col>
                    <Col md="6"></Col>
                    <Col xs="12" sm="6" md="3">
                        <div style={{position: 'relative',height:'100%',marginTop:'-20px'}}>
                            <h2 className={ [classes.makeinline,classes.verticalCenter].join(' ') } style={{marginRight:'76px',right:0}}>{authorName}</h2>
                            <div className={[classes.profilepicture,classes.makeinline,classes.verticalCenter].join(' ')} style={{backgroundImage: `url(`+authorPicture+`)`,right:0}}></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Container>
                            <div className={classes.leftIngredientsContainer}>
                                <div className={classes.leftIngredientsTopDetailsContainer}>
                                    <Container>
                                        <div style={{paddingTop:'1em',paddingBottom:'1em'}}>
                                            <h5>Preparation Time : 20 mins</h5>
                                            <h5>Cook Time : 30 mins</h5>
                                            <h5>Servings : 2</h5>
                                        </div>
                                    </Container>
                                </div>
                                <Container>
                                    <div style={{paddingTop:'1em',paddingBottom:'1em'}}>
                                        <h3>Ingredients:</h3>
                                        <ul>
                                            <li>Egss</li>
                                            <li>Egss</li>
                                            <li>Egss</li>
                                            <li>Egss</li>
                                            <li>Egss</li>
                                            <li>Egss</li>
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                        </Container>
                    </Col>
                    <Col md='6'>
                        <h3>Directions:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia dignissimos blanditiis minima ducimus quasi, veritatis sed iste qui autem consequuntur, vero, aliquam ipsa hic optio! Reprehenderit, saepe nisi? Nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia dignissimos blanditiis minima ducimus quasi, veritatis sed iste qui autem consequuntur, vero, aliquam ipsa hic optio! Reprehenderit, saepe nisi? Nesciunt?</p>
                    </Col>
                </Row>
                <CommentsMain />
            </div>
            <div style={{marginTop:'20vh'}}>
                <Footer/>
            </div> 
            
        </div>
    )
}

export default RecipeDetailsPage
