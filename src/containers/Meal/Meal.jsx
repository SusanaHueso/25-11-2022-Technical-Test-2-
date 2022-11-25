import React from "react";
import './Meal.css';

const Meal = ({value}) => {

    return(
        <div>
            <img className="mealImage" src={value.strMealThumb}></img>
        </div>
    )
}

export default Meal;