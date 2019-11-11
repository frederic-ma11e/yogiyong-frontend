import React from 'react';
import './Main.scss';
import Header from '../../Components/Header'
import SearchContainer from '../../Components/MainPage/SearchContainer'
import CategoryContainer from '../../Components/MainPage/CategoryContainer'
import Footer from '../../Components/Footer'
import RestaurantInfo from '../RestaurantInfo';
function Main() {
  return (
    <div>
      <Header /> 
      <div className="search-media">
      <SearchContainer />
      </div>
      <CategoryContainer />
      <Footer />
    </div>
  );
}

export default Main;
