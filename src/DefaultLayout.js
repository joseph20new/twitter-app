import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="defaultLayout">
        <header>
          <div className="header"><Header /></div>
        </header>
        <main>
          <Component {...matchProps} />
        </main>
        <footer>
          <div className="footer"><Footer /></div>
        </footer>
      </div>
    )}
  />
);


export default DefaultLayout;
