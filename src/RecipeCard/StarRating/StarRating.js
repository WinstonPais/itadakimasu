import React from 'react';

import classes from './StarRating.module.css';

const starRating = ( props ) => {
    const stars = []
    for(let i=0;i<props.stars;i++){
        stars.push(<div key={i} className={classes.star}></div>)
    }
    return(
        <div className="row">
            {stars}
        </div>
    )
}

export default starRating;