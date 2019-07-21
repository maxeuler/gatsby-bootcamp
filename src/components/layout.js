/* eslint-disable react/prop-types */
import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './styles/layout.module.scss';

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header></Header>
      <main>{children}</main>
    </div>
    <Footer></Footer>
  </div>
);

export default Layout;
