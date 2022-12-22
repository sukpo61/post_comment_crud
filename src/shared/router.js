import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PostsContainer from "../components/Pages/PostListpage/PostsContainer";
import Header from "../components/Layout/Header";
import PostAddForm from "../components/Pages/PostAddpage/PostAddForm";
import Postpage from "../components/Pages/Postpage/Postpage";
import PostEditForm from "../components/Pages/PostEditpage/PostEditForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<PostsContainer />} />
        <Route path="/addform" element={<PostAddForm />} />
        <Route path="/editform" element={<PostEditForm />} />
        <Route path="/:id" element={<Postpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
