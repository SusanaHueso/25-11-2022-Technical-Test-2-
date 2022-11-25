import React, {useState, useEffect} from "react";
import { getAllMeals } from "../../services/apiCalls";
import Meal from "../Meal/Meal";

import './RecipiesPage';

const RecipiesPage = () => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=>{

        if(meals.length === 0){

            getAllMeals().then(
                res => {
                    setMeals(res.data.meals);
                    console.log(res);
                }
            )
            .catch(error => {
                if(error.response.status === 404){
                    setError("Invalid endpoint call, bad url");
                }
            });

        }
    },[meals]);


    return(
        <div className='recipiesDesign'>
            {
                    meals.length > 0 &&

                    meals.map(meal => {
                        return (
                            <Meal value={meal} key={meal.idMeal}/>
                        )
                    })
            }

        </div>
    )

}

export default RecipiesPage;