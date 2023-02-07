import React from 'react';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <Layout>
      <Header />
      <div>{children}</div>
    </Layout>
  );
}

export default Layout;
