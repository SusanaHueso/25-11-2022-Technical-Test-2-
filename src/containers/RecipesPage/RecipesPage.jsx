import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getAllMeals } from "../../services/apiCalls";
import Meal from "../Meal/Meal";

import "./RecipesPage.css";

const RecipesPage = () => {
  const [meals, setMeals] = useState([]);
  //necessary to not rerender all meals when meals === 0
  const [firstRender, setFirstRender] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (meals.length === 0 && firstRender) {
      getAllMeals()
        .then((res) => {
          setMeals(res.data.meals);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setError("Invalid endpoint call, bad url");
            console.log(error);
          }
        });
    }
  }, [meals]);

  return (
    <div className="RecipesDesign">
      {meals.map((meal, index) => {
        return (
          <div key={index} className="mealAndButtonDesign">
            <Meal value={meal} key={meal.idMeal} />
            <Button
              className="buttonDesign"
              onClick={() => {
                const newMeals = meals.filter((m) => m.idMeal !== meal.idMeal);
                setMeals([...newMeals]);
                setFirstRender(false);
              }}
            >
              Delete Meal
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesPage;
