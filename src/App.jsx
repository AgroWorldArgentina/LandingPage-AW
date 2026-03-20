import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/headerComponent";
import HomePage from "./pages/homePage";
import FooterComponent from "./components/footerComponent";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <HomePage />
      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
}
