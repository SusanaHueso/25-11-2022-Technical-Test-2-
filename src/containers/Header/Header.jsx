import React from "react";
import { CustomDropdown } from "../../components/CustomDropDown/CustomDropDown";
import "./Header.css";
export const Header = () => {
  const title = "Menu";
  const option1 = "Home";
  const option2 = "Body";
  return (
    <div className="headerDesign">
      {" "}
      <CustomDropdown title={title} option1={option1} option2={option2} />
    </div>
  );
};
