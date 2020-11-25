import React from 'react';

import CardIngredients from './CardIngredients/CardIngredients'
import StarRating from './StarRating/StarRating'
import classes from './RecipeCard.module.css';

const recipeCard = ( props ) => {
    const ing = ['Eggs','Bacon','Cheese']
    return(
        <div className={classes.card}>
            <div className={classes.VegNonVegLabel}></div>
            <div className={classes.greyTranslucentSection}>
                <strong className={classes.recipetitle}>Eggs Benedict</strong>
                <div className={classes.starlist}>
                    <StarRating stars={3}></StarRating>
                </div>
                <div className={classes.ingredientslist}>
                    <CardIngredients ingedients={ing} ></CardIngredients>
                </div>
                <div className={classes.ppandname}>
                    <div className="row">
                        <div className={classes.profilepicture}></div>
                        <strong className={classes.profilename}>Vinsten Leon</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default recipeCard;