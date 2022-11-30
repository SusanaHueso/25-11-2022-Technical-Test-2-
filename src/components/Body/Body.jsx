import React from "react";
import { Routes, Route } from "react-router-dom";
import RecipesPage from "../../containers/RecipesPage/RecipesPage";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
      </Routes>
    </>
  );
};

export default Body;
