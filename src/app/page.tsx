import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    fontSize: '2rem',
    color: '#333',
    marginTop: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
  };

  return (
    <Layout>
      <h2 style={headerStyle}>Welcome to the Homepage</h2>
      <p style={paragraphStyle}>This page is styled using inline styles, layout, and global CSS!</p>
    </Layout>
  );
};

export default HomePage;
