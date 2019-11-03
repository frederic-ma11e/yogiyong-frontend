import React, { Component } from 'react';

class RestaurantInfoCMenu extends Component {
  handleClick = () =>{
    console.log(this.props.info.title,"click")
  }
  render() {
    const { title, price, imgUrl }=this.props.info
    return (
      <li className="restaurantInfo-category-menu" onClick = {this.handleClick}>
        <td className="restaurantInfo-category-menu__text">
          <div className="restaurantInfo-category-menu__text--name">
            {title}
          </div>
          <div className="restaurantInfo-category-menu__text--price">
            {price}원
          </div>
        </td>
        <img className="restaurantInfo-category-menu__photo" src={imgUrl} alt="음식 사진" /> 
      </li>
    );
  }
}

export default RestaurantInfoCMenu;