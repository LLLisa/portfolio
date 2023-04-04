import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';

export default () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
