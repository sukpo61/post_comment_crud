import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PostsContainer from '../components/Pages/PostListpage/PostsContainer';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PostAddForm from '../components/Pages/PostAddpage/PostAddForm';
import Postpage from '../components/Pages/Postpage/Postpage';
import PostEditForm from '../components/Pages/PostEditpage/PostEditForm';
import MenuPage from '../components/Pages/MenuPage/MenuPage';
import MenuDetailPage from '../components/Pages/MenuPage/MenuDetailPage';

const Wrap = styled.div`
  width: 70%;
  min-width: 500px;
  margin: 100px auto;
  display: flex;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<PostsContainer />} />
        <Route path='/addform' element={<PostAddForm />} />
        <Route path='/editform' element={<PostEditForm />} />
        <Route path='/:id' element={<Postpage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/menu/:id' element={<MenuDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
