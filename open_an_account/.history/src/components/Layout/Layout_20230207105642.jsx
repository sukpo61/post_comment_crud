import React from 'react';

function Layout({ children }) {
  return (
    <Layout>
      <Header />
      <div>{children}</div>
    </Layout>
  );
}

export default Layout;
