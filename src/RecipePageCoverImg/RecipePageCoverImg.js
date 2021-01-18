import React from 'react'

const RecipePageCoverImg = (props) => {
    return (
        <img style={{height:'40vh',width:'100%',filter: 'brightness(20%)',borderBottom: '5px solid #FFF77A'}} src={props.imageurl} alt="cover"/>
    )
}

export default RecipePageCoverImg
