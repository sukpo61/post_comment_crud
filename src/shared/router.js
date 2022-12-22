import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Layout/Header";
import Mainpage from "../components/Pages/MainPage/Mainpage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
