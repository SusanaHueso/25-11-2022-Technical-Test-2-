import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./NewRecipe.css";
import { Button } from "react-bootstrap";
import "/Users/susana.huesodevis/Documents/GeeksHubs exercises/technical-test-2/src/config.jsx";
export const NewRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
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
  console.log("soy el json", global.config.jsonDict);
  return (
    <div className="buttonTooDesign">
      <Form className="newRecipieDesign">
        <Form.Group className="groupsDesign" controlId="RecipieName">
          <Form.Label>
            <b>recipe Name</b>
          </Form.Label>
          <Form.Control
            onBlur={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter the new recipe name"
          />
          <Form.Text>
            Ideas: Sushi, Spanish omelette, Roasted chicken...
          </Form.Text>
        </Form.Group>
        <Form.Group className="groupsDesign" controlId="RecipieIngredients">
          <Form.Label>
            <b>recipe Ingredients</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the new recipe ingredients"
            onBlur={(event) => setIngredients(event.target.value)}
          />
          <Form.Text>Ideas: Eggs, Butter...</Form.Text>
        </Form.Group>
        <Form.Group controlId="RecipieInstructions">
          <Form.Label>
            <b>recipe Instructions</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the new recipe instructions"
            onBlur={(event) => setInstructions(event.target.value)}
          />
          <Form.Text>
            Ideas: Preheat the oven to 200C/180C, Mix ingredients...
          </Form.Text>
        </Form.Group>
      </Form>
      <div className="buttonOnly">
        <Button onClick={() => handleJson(json, json[0]["name"])}>
          Save recipe
        </Button>
      </div>
    </div>
  );
};
