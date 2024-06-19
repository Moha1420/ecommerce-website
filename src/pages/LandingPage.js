import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to E-Commerce Website</h1>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default LandingPage;
