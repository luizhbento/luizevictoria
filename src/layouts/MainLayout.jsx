import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <body className=" font-contentFont">
        <Outlet />
      </body>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
