import React from 'react';
import HomePage from '../pages/homepage/HomePage';
import Footer from './footer/Footer';
import Header from './header/Header';

const BaseLayouts = () => {
  return (
    <div>
      <Header/>
      <main>
        <HomePage/>


      </main>
      <Footer/>
      
    </div>
  );
};

export default BaseLayouts;