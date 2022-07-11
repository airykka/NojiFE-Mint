import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { HomeContext } from "../../context/context";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./mainLayout.scss";

export const MainLayout = () => {
  const { currentScreen } = useContext(HomeContext);
  return (
    <div>
      <Header />
      <Outlet />
      <div
        className={`footer-wrapper ${
          currentScreen === 0 || currentScreen === 6
            ? "mobile-footer-show"
            : "mobile-footer-hide"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};
