import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddBook } from "./AddBook";

export const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
    </Routes>
  </div>;
};
