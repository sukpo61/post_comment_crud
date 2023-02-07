import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/board' element={<BoardPage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
