import React from 'react';

import CardIngredients from './CardIngredients/CardIngredients'
import StarRating from './StarRating/StarRating'
import classes from './RecipeCard.module.css';
import firebase from 'firebase/app';
import 'firebase/database';

const RecipeCard = ( props ) => {
    const [recipeName,setrecipeName] = React.useState("None");
    const [recipeStars,setrecipeStars] = React.useState(1);
    const [topIngredientsList,settopIngredientsList] = React.useState([]);
    const [recipeCoverImage,setrecipeCoverImage] = React.useState("none");
    const [authorName,setAuthorName] = React.useState("none");
    const [authorPicture,setAuthorPicture] = React.useState("none");
    const [foodType,setFoodType] = React.useState("none");

    React.useEffect(() => {
        if(props.recipedata){
            const foodTypeParser = {
                "NonVeg" : "https://firebasestorage.googleapis.com/v0/b/itadakimasu-development.appspot.com/o/non-veg.jpg?alt=media&token=964be78c-6ba5-48a4-9460-cda9f36f8f83",
                "Veg" : "https://firebasestorage.googleapis.com/v0/b/itadakimasu-development.appspot.com/o/veglogo.png?alt=media&token=0b8b4588-6ccb-4035-bae0-2419a1156fe4"
            }
            setrecipeName(props.recipedata["Name"]);
            setrecipeStars(Math.floor(props.recipedata["totalratings"]/props.recipedata["ratingsrecived"]));
            settopIngredientsList(Object.keys(props.recipedata["ingredients"]).slice(0,3));
            setrecipeCoverImage(props.recipedata["coverimg"]);
            setFoodType(foodTypeParser[props.recipedata["type"]]);
            const fetchData = async () => {
                const db = firebase.database();
                let data = await db.ref("users/"+props.recipedata['authorId']).once('value');
                data = data.val();
                if(data){
                    setAuthorName(data['displayName']);
                    setAuthorPicture(data['profilePicture']);
                }
            }
            fetchData();
        }
    },[props.recipedata])

    const testfn = () => {
        console.log("open page "+props.recipeId)
    }

    return(
        <div onClick={testfn} className={classes.card} style={{backgroundImage: `url(`+recipeCoverImage+`)`}}>
            <div className={classes.FoodTypeLabel} style={{backgroundImage: `url(`+foodType+`)`}}></div>
            <div className={classes.greyTranslucentSection}>
                <strong className={classes.recipetitle}>{recipeName}</strong>
                <div className={classes.starlist}>
                    <StarRating stars={recipeStars}></StarRating>
                </div>
                <div className={classes.ingredientslist}>
                    <CardIngredients ingedients={topIngredientsList} ></CardIngredients>
                </div>
                <div className={classes.ppandname}>
                    <div className="row">
                        <div className={classes.profilepicture} style={{backgroundImage: `url(`+authorPicture+`)`}}></div>
                        <strong className={classes.profilename}>{authorName}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;