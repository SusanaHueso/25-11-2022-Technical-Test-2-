import React from "react";
import { CustomDropdown } from "../CustomDropDown/CustomDropDown";
import Button from "react-bootstrap/Button";

import "./Header.css";
export const Header = () => {
  const title = "Menu";
  const option1 = "Home";
  const option2 = "Recipes";
  const titleButton = "Add New recipe";
  return (
    <div className="headerDesign">
      {" "}
      <CustomDropdown title={title} option1={option1} option2={option2} />
      <Button className="buttonDesign" href="/NewRecipe">
        {titleButton}
      </Button>
    </div>
  );
};
