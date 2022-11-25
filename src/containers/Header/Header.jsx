import React from "react";
import { CustomDropdown } from "../../components/CustomDropDown/CustomDropDown";
import "./Header.css";
export const Header = () => {
  const title = "Easy recipies";
  const option1 = "Main dishes";
  const option2 = "Dessert";
  return (
    <div className="headerDesign">
      {" "}
      <CustomDropdown title={title} option1={option1} option2={option2} />
    </div>
  );
};
