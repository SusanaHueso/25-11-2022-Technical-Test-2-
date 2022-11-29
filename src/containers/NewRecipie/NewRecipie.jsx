import React from "react";
import Form from "react-bootstrap/Form";
import "./NewRecipie.css";

export const NewRecipie = () => {
  return (
    <Form className="newRecipieDesign">
      <Form.Group className="groupsDesign" controlId="RecipieName">
        <Form.Label>
          <b>Recipie Name</b>
        </Form.Label>
        <Form.Control type="text" placeholder="Enter the new recipie name" />
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
        />
        <Form.Text>
          Ideas: Preheat the oven to 200C/180C, Mix ingredients...
        </Form.Text>
      </Form.Group>
    </Form>
  );
};
