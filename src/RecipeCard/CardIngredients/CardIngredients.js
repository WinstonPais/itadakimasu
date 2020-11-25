import React from 'react';

import classes from './CardIngredients.module.css';

const CardIngredients = ( props ) => {
    return(
        <div className="row">
            {
                props.ingedients.map((ele,index) =>(
                <button key={index} className={"btn "+classes.mybtn} disabled>{ele}</button>
                ))
            }
        </div>
    )
}

export default CardIngredients;