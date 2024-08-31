import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => (
  <>
    <Navbar />
    <div className="container mt-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Root;
