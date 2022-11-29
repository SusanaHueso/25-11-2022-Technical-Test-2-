import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./NewRecipie.css";
import { Button, ButtonGroup } from "react-bootstrap";
import "/Users/susana.huesodevis/Documents/GeeksHubs exercises/technical-test-2/src/config.jsx";
export const NewRecipie = () => {
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
  const handleJson = () => {
    JSON.stringify(global.config.jsonDict.push(json));
  };
  console.log("soy el json", global.config.jsonDict);
  return (
    <div className="buttonTooDesign">
      <Form className="newRecipieDesign">
        <Form.Group className="groupsDesign" controlId="RecipieName">
          <Form.Label>
            <b>Recipie Name</b>
          </Form.Label>
          <Form.Control
            onBlur={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter the new recipie name"
          />
          <Form.Text>
            Ideas: Sushi, Spanish omelette, Roasted chicken...
          </Form.Text>
        </Form.Group>
        <Form.Group className="groupsDesign" controlId="RecipieIngredients">
          <Form.Label>
            <b>Recipie Ingredients</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the new recipie ingredients"
            onBlur={(event) => setIngredients(event.target.value)}
          />
          <Form.Text>Ideas: Eggs, Butter...</Form.Text>
        </Form.Group>
        <Form.Group controlId="RecipieInstructions">
          <Form.Label>
            <b>Recipie Instructions</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the new recipie instructions"
            onBlur={(event) => setInstructions(event.target.value)}
          />
          <Form.Text>
            Ideas: Preheat the oven to 200C/180C, Mix ingredients...
          </Form.Text>
        </Form.Group>
      </Form>
      <div className="buttonOnly">
        <Button onClick={() => handleJson()}>Save Recipie</Button>
      </div>
    </div>
  );
};
