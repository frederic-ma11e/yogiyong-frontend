import React, { Component } from 'react';
import FoodOrderModal from '../FoodOrderModal'
import RestaurantInfo from '../../pages/RestaurantInfo';

class RestaurantInfoCMenu extends Component {
  // 인기메뉴 텝 안의 황금올리브치킨,양념치킨 등등 있는 컴포넌트입니다.

  constructor() {
    super();
    this.state = {
      modal: false //false
    };

    
  this.openModal = (e) => {
    e.preventDefault();
    this.setState({
      modal: true
    });
    
  };
  
  this.handleCloseModal = (e)=> {
    this.setState({
      modal: false
    });
  };
  }

  componentWillUnmount() {
    if (!this.state.modal) {
      return true
    }
  }

  handleClick = () =>{
    this.setState({modal: true})
  }
  render() {
    const { name, price, image, description } = this.props.info;
    const info = this.props
    
    const floorPrice = Math.floor(price); // 가격 값이 12900.00 뒤에 소수점까지 넘어와서 이렇게 처리했습니다/
    return (
      <li className="restaurantInfo-category-menu" onClick={(e) => this.props.onClick(e, info)} >

        <td className="restaurantInfo-category-menu__text"   >
          
          <div className="restaurantInfo-category-menu__text--name">{name}</div>
          <div className="restaurantInfo-category-menu__text--desc">
            {description}
          </div>
          <div className="restaurantInfo-category-menu__text--price">
            {floorPrice}원
          </div>
        </td>
        <div className="restaurantInfo-category-menu__photo" style={{ display: image ? "" : "none" }}>
          <img
           onClick={this.openModal}
            className="menu-photo"
            src={image}
            alt=""
            style={{ border: 0 }}
          />
          
        </div>
      </li>
    );
  }
}

export default RestaurantInfoCMenu;