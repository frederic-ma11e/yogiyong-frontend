import React from 'react';
import './Main.scss';
import Header from '../../Components/Header'
import SearchContainer from '../../Components/SearchContainer'
import CategoryContainer from '../../Components/CategoryContainer'
import Footer from '../../Components/Footer'

function Main() {
  return (
    <div>
      <Header /> 
      <SearchContainer />
      <CategoryContainer />
      <Footer/>
    </div>
  );
}

export default Main;
