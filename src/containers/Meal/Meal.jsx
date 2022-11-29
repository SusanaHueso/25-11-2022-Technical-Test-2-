/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Meal.css";

const Meal = ({ value }) => {
  const [show, setShow] = useState(false);
  const handleClick = (id) => {
    setShow(!show);
    console.log(id);
  };
  const name = value.strMeal;
  const instructions = value.strInstructions;
  
  return (
    <div key={value.idMeal}>
      <img
        className="mealImage"
        src={value.strMealThumb}
        onClick={() => handleClick()}
      ></img>
      {show ? (
        <div>
          <b>{name}</b>
          <p>{instructions}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Meal;
