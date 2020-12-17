import React from 'react';
import {Title, Img, Cal, Section} from './Style-Recipe'


const Recipe = ({title, calories, ingredients, image}) => {
    return (
        <Section>
            <Title>Title: {title}</Title>
            <Cal>Calories: {calories}</Cal>
            <Cal>Ingredients: {ingredients}</Cal>
            <Img src={image}/>
        </Section>
    )
}

export default Recipe