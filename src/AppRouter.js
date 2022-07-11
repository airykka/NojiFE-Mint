import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { Mint } from "./pages";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Mint />} />
        </Route>
      </Routes>
    </Router>
  );
};
