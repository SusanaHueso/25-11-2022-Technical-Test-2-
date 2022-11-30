import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./NewRecipe.css";
import { Button } from "react-bootstrap";
export const NewRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [buttonError, setButtonError] = useState(false);
  var json = [
    {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
    },
  ];
  const handleJson = (jsonData, filename) => {
    const fileData = JSON.stringify(jsonData[0]);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
  };
  const checkFields = (funct) => {
    const { myfunc } = funct();
    myfunc();
    if (name.length > 0 && ingredients.length > 0 && instructions.length > 0) {
      setButtonError(false);
    }
  };
  return (
    <div className="buttonTooDesign">
      <Form className="newRecipieDesign">
        <Form.Group className="groupsDesign" controlId="RecipieName">
          <Form.Label>
            <b>Recipe Name</b>
          </Form.Label>
          <Form.Control
            onBlur={(event) => setName(event.target.value)}
            type="text"
            name="name"
            placeholder="Enter the new recipe name"
          />
          <Form.Text>
            Ideas: Sushi, Spanish omelette, Roasted chicken...
          </Form.Text>
        </Form.Group>
        <Form.Group className="groupsDesign" controlId="RecipieIngredients">
          <Form.Label>
            <b>Recipe Ingredients</b>
          </Form.Label>
          <Form.Control
            onBlur={(event) => setIngredients(event.target.value)}
            type="text"
            name="ingredients"
            placeholder="Enter the new recipe ingredients"
          />
          <Form.Text>Ideas: Eggs, Butter...</Form.Text>
        </Form.Group>
        <Form.Group controlId="RecipieInstructions">
          <Form.Label>
            <b>Recipe Instructions</b>
          </Form.Label>
          <Form.Control
            onBlur={(event) => setInstructions(event.target.value)}
            type="text"
            name="instructions"
            placeholder="Enter the new recipe instructions"
          />
          <Form.Text>
            Ideas: Preheat the oven to 200C/180C, Mix ingredients...
          </Form.Text>
        </Form.Group>
      </Form>
      <div className="buttonOnly">
        <Button
          onClick={() =>
            name.length > 0 && ingredients.length > 0 && instructions.length > 0
              ? (handleJson(json, json[0]["name"]), setButtonError(false))
              : setButtonError(true)
          }
        >
          Save recipe
        </Button>
      </div>
      {buttonError && (
        <p style={{ color: "red" }}>
          {" "}
          "Some of the fields were not filled, please complete the form before
          clicking again"
        </p>
      )}
    </div>
  );
};
