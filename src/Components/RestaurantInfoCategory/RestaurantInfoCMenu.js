import React, { Component } from 'react';

class RestaurantInfoCMenu extends Component {
  handleClick = () =>{
    console.log(this.props.info.title,"click")
  }
  render() {
    const { name, price, image, description }=this.props.info
    const floorPrice = Math.floor(price)// 가격 값이 12900.00 뒤에 소수점까지 넘어와서 이렇게 처리했습니다/
    return (
      <li className="restaurantInfo-category-menu" onClick = {this.handleClick}>
        <td className="restaurantInfo-category-menu__text">
          <div className="restaurantInfo-category-menu__text--name">
            {name}
          </div>
          <div className="restaurantInfo-category-menu__text--desc">
            {description}
          </div>
          <div className="restaurantInfo-category-menu__text--price">
            {floorPrice}원
          </div>
        </td>
        <div style={{display:image?"":"none"}}>
          <img className="restaurantInfo-category-menu__photo" src={image} alt="" style={{border:0}}/> 
        </div>
        
         
      </li>
    );
  }
}

export default RestaurantInfoCMenu;