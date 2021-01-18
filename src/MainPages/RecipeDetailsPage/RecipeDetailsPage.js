import React from 'react';
import RecipePageCoverImg from './../../RecipePageCoverImg/RecipePageCoverImg';
import StarRating from './../../RecipeCard/StarRating/StarRating';
import Footer from './../../footer/footer';
import CommentsMain from './../../CommentsMain/CommentsMain';
import { Row, Col, Container } from 'reactstrap';
import classes from './RecipeDetailsPage.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const RecipeDetailsPage = () => {
    const [recipeName,setRecipeName] = React.useState("None");
    const [rating,setRatings] = React.useState(1.5);
    const [authorName,setAuthorName] = React.useState('Illuminati');
    const [authorPicture,setAuthorPicture] = React.useState('https://lh3.googleusercontent.com/proxy/SQF2DRZjihxzJg1Of2J7fXQyVuP_K2RYrKu4ChCmfYP3rafhH_mf_rgYSc0YcOqmrS-YNabBGsqiyzBSHjHan2HzwxqUM1u3CrJDjndbkLI2bPJxjO6Sia4U2D4IN3wRMWCcj9Wi');
    const [prepTime,setPrepTime] = React.useState(30);
    const [cookTime,setCookTime] = React.useState(20);
    const [servings,setServings] = React.useState(1);
    const [listOfIngredients,setListOfIngredients] = React.useState([]);
    const [listOfIngredientsQuantity,setListOfIngredientsQuantity] = React.useState([]);
    const [descriptionList,setDescriptionList] = React.useState([]);
    const [recipeId,setRecipeId] = React.useState(null);
    const [allComments,updateComments] = React.useState({});
    const [coverImageUrl,setCoverImageUrl] = React.useState('');

    React.useEffect(() => {
        const url = window.location.href.split('/');
        setRecipeId(url[url.length - 1]);
        const recipeId = url[url.length - 1];
        // match // history
        // match.params.id
        const fetchData = async () => {
            if(recipeId){
                const db = firebase.database();
                let data = await db.ref("recipes/"+recipeId).once('value');
                data=data.val();
                if(data){
                    setRecipeName(data['Name'])
                    setRatings(data["totalratings"]/data["ratingsrecived"]);
                    setListOfIngredients(Object.keys(data['ingredients']));
                    setListOfIngredientsQuantity(Object.keys(data['ingredients']).map((item) => {
                        return data['ingredients'][item]
                    }))
                    setDescriptionList(data["description"].split('\n'));
                    setCoverImageUrl(data['coverimg'])
                    setPrepTime(data['PrepTime'])
                    setCookTime(data['CookTime'])
                    setServings(data['Servings'])
                }
                data = await db.ref("users/"+data['authorId']).once('value');
                data=data.val();
                if(data){
                    setAuthorName(data['displayName']);
                    setAuthorPicture(data['profilePicture']);
                }
            }
        }
        fetchData();
    },[])

    React.useEffect(() => {
        const getComments = async () => {
            const currentComments =  await firebase.database().ref('recipes/' + recipeId + '/comments');
            currentComments.on('value', (snapshot) => {
                const data = snapshot.val();
                updateComments(data);
            });
        }
        getComments();
    },[recipeId])

    return (
        <div style={{position:'relative',color:'white'}}>
            <RecipePageCoverImg imageurl={coverImageUrl} />
            <div style={{marginLeft:'10vw',marginRight:'10vw'}}>
                <Row style={{marginTop:'3em',marginBottom:'2em',marginRight:'1em',marginLeft:'1em'}}>
                    <Col xs="12" sm="6" md="3" style={{position:'relative'}}>
                        <h1>{ recipeName }</h1>
                        <h2 className={ classes.makeinline }>{rating.toFixed(1)}</h2>
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
                                            <h5>Preparation Time : {prepTime}</h5>
                                            <h5>Cook Time : {cookTime}</h5>
                                            <h5>Servings : {servings}</h5>
                                        </div>
                                    </Container>
                                </div>
                                <Container>
                                    <div style={{paddingTop:'1em',paddingBottom:'1em'}}>
                                        <h1 style={{textDecoration:'underline'}}>Ingredients:</h1>
                                        <ul style={{listStyleImage:"url('https://firebasestorage.googleapis.com/v0/b/itadakimasu-development.appspot.com/o/forknife.png?alt=media&token=0ec233ce-bccc-488d-9054-ff4a3afad279')"}}>
                                            {listOfIngredients.map((item,i)=>{
                                                return(
                                                    <li style={{marginTop:'1em',verticalAlign: 'middle',fontSize:'25px'}} key={item+i}>{item} - {listOfIngredientsQuantity[i]}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Container>
                            </div>
                        </Container>
                    </Col>
                    <Col md='6'>
                        <h1 style={{marginBottom:'1em',textDecoration:'underline'}}>Directions:</h1>
                        {descriptionList ? descriptionList.map((item,index)=>{
                            return(
                                <li style={{marginBottom:'1em',fontSize:'15px'}} key={item+index}>{item}</li>
                            )
                        }) : null }
                    </Col>
                </Row>
                <div style={{marginTop:'8em'}}>
                    <CommentsMain rId={recipeId} commentdata={allComments} />
                </div>
                
            </div>
            <div style={{marginTop:'20vh'}}>
                <Footer/>
            </div> 
            
        </div>
    )
}

export default RecipeDetailsPage
