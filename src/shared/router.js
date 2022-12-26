import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PostsContainer from "../components/Pages/PostListpage/PostsContainer";
import Header from "../components/Layout/Header";
// import PostAddForm from "../components/Pages/PostAddpage/PostAddForm";
// // import Postpage from "../components/Pages/Postpage/Postpage";
// import PostEditForm from "../components/Pages/PostEditpage/PostEditForm";
// import Footer from "../components/Layout/Footer";
// import ScrollToTop from "../components/Layout/ScrollToTop";
// import Mainpage from "../components/Pages/MainPage/Mainpage";
import ProductPage from "../components/Pages/ProductPage/ProductPage";
// import MenuPage from "../components/Pages/MenuPage/MenuPage";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop></ScrollToTop> */}
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Mainpage />} />
        <Route path="/reservation" element={<PostsContainer />} />
        <Route path="/addform" element={<PostAddForm />} />
        <Route path="/editform" element={<PostEditForm />} />
        <Route path="/reservation/:id" element={<Postpage />} /> */}
        <Route path="/productpage/:id" element={<ProductPage />} />
        {/* <Route path="/menu" element={<MenuPage />} /> */}
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
};

export default Router;