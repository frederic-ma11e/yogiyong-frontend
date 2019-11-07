import React, { Component } from "react";
import RestaurantInfoCMenu from "./RestaurantInfoCMenu";
import FoodOrderModal from "../FoodOrderModal";

class RestaurantInfoCList extends Component { // 인기메뉴, 1인분 주문 을 관리하는 컴포넌트입니다.
  constructor() {
    super();
    this.state = {
      displayMode: false,
      position: "",
    };

  }

  handleClick = () => {
    if (this.state.displayMode === false)
      this.setState({ displayMode: true, position: "-184px -43px" });
    else this.setState({ displayMode: false, position: "-149px -43px" });
  };
  render() {
    const { title, menus, id } = this.props.info;
    const { displayMode, position } = this.state;

    const categoryList = menus.map((info, index) => (
      <RestaurantInfoCMenu key={index} info={info} 
      onClick={this.props.clicked} name ={this.props.name}
      />
    ));
    return (
      <div>
        <div
          className="restaurantInfo-category-container"
          onClick={this.handleClick}
          name={id}
        >
          <span className="restaurantInfo-category-container__title">{title}</span> 
          {/* 인기메뉴 , 1인분 주문 등등 */}
          <div
            className="arrow-icon"
            style={{ backgroundPosition: position }}
          />
        </div>
        <div style={{ display: displayMode ? "" : "none" }}>
        {categoryList}
        
        </div> 
        
        {/* 인기메뉴 안의 황금올리브 치킨,양념치킨 등등 나누는 컴포넌트 */}
      </div>
    );
  }
}

export default RestaurantInfoCList;